/**
 * quiz.js — dependency-free quiz / review widget.
 *
 * Reads data from a sibling <script type="application/json" id="...">
 * and renders an interactive question set.
 *
 * Usage:
 *   <script id="quiz-data" type="application/json">[...]</script>
 *   <div class="quiz" data-quiz-source="quiz-data" data-quiz-title="Quiz"></div>
 */

(function () {
  'use strict';

  function initAll() {
    document.querySelectorAll('[data-quiz-source]').forEach(initWidget);
  }

  function initWidget(container) {
    var sourceId = container.getAttribute('data-quiz-source');
    var title = container.getAttribute('data-quiz-title') || 'Quiz';
    var dataScript = document.getElementById(sourceId);

    if (!dataScript) {
      container.textContent = 'Błąd: nie znaleziono danych quizu (#' + sourceId + ').';
      return;
    }

    var questions;
    try {
      questions = JSON.parse(dataScript.textContent);
    } catch (err) {
      container.textContent = 'Błąd: dane quizu są uszkodzone.';
      return;
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      container.textContent = 'Błąd: brak pytań w quizie.';
      return;
    }

    container.innerHTML = '';

    var header = document.createElement('div');
    header.className = 'quiz__header';
    header.textContent = title;
    container.appendChild(header);

    var answeredCount = 0;
    var correctCount = 0;
    var questionEls = questions.map(function (q, i) {
      return renderQuestion(q, i);
    });

    questionEls.forEach(function (el) {
      container.appendChild(el);
    });

    var scoreEl = document.createElement('div');
    scoreEl.className = 'quiz__score';
    scoreEl.setAttribute('aria-live', 'polite');
    container.appendChild(scoreEl);

    var restartBtn = document.createElement('button');
    restartBtn.className = 'quiz__restart';
    restartBtn.type = 'button';
    restartBtn.textContent = 'Spróbuj ponownie';
    restartBtn.setAttribute('hidden', 'hidden');
    restartBtn.addEventListener('click', function () {
      answeredCount = 0;
      correctCount = 0;
      questionEls.forEach(resetQuestion);
      updateScore();
      restartBtn.setAttribute('hidden', 'hidden');
    });
    container.appendChild(restartBtn);

    updateScore();

    function updateScore() {
      var text = 'Wynik: ' + correctCount + '/' + questions.length;
      if (answeredCount === questions.length) {
        text += correctCount === questions.length
          ? ' — świetnie, wszystko dobrze!'
          : ' — przejrzyj wyjaśnienia powyżej.';
        restartBtn.removeAttribute('hidden');
      }
      scoreEl.textContent = text;
    }

    function renderQuestion(q, index) {
      var fieldset = document.createElement('fieldset');
      fieldset.className = 'quiz__question';

      var legend = document.createElement('legend');
      legend.className = 'quiz__question-text';
      legend.textContent = (index + 1) + '. ' + (q.q || q.question || '');
      fieldset.appendChild(legend);

      if (q.code) {
        var pre = document.createElement('pre');
        var code = document.createElement('code');
        code.textContent = q.code;
        pre.appendChild(code);
        pre.className = 'quiz__code';
        fieldset.appendChild(pre);
      }

      var optsWrap = document.createElement('div');
      optsWrap.className = 'quiz__options';
      fieldset.appendChild(optsWrap);

      var correctIndex = Number(q.correct) || 0;
      var options = Array.isArray(q.options) ? q.options : [];

      options.forEach(function (label, idx) {
        var btn = document.createElement('button');
        btn.className = 'quiz__option';
        btn.type = 'button';
        btn.textContent = label;
        btn.addEventListener('click', function () {
          if (fieldset.classList.contains('is-answered')) return;

          fieldset.classList.add('is-answered');
          answeredCount += 1;

          if (idx === correctIndex) {
            btn.classList.add('is-correct');
            correctCount += 1;
          } else {
            btn.classList.add('is-wrong');
          }

          Array.from(optsWrap.children).forEach(function (child, childIdx) {
            child.classList.add('is-disabled');
            if (childIdx === correctIndex) {
              child.classList.add('is-correct');
            }
          });

          feedbackEl.textContent = buildFeedback(q);
          updateScore();
        });
        optsWrap.appendChild(btn);
      });

      var feedbackEl = document.createElement('div');
      feedbackEl.className = 'quiz__feedback';
      fieldset.appendChild(feedbackEl);

      // Print-only answer key.
      var printKey = document.createElement('span');
      printKey.className = 'print-only';
      printKey.textContent = ' (poprawna: ' + (options[correctIndex] || '') + ')';
      legend.appendChild(printKey);

      return fieldset;
    }

    function buildFeedback(q) {
      var parts = [];
      if (q.why) parts.push(q.why);
      if (q.review) parts.push('W review: ' + q.review);
      return parts.join(' ');
    }

    function resetQuestion(fieldset) {
      fieldset.classList.remove('is-answered');
      var feedback = fieldset.querySelector('.quiz__feedback');
      if (feedback) feedback.textContent = '';
      var opts = fieldset.querySelectorAll('.quiz__option');
      opts.forEach(function (btn) {
        btn.classList.remove('is-correct', 'is-wrong', 'is-disabled');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
