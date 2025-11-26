// Pathology of Immune System MCQ - All 45 Questions EXACT from PDF
const allTopics = [
  { id: 1, name: "Pathology of Immune System", questionCount: 45 }
];

const quizDataBank = {
  1: [
    {q: "The main target of HIV are:", o: ["lymphocytes", "T-killer lymphocytes", "T-helper lymphocytes", "NK-cells"], c: [2], t: "s"},
    {q: "Indicate the correct statement:", o: ["receptor for the HIV virus infection is a molecule of CD4", "when HIV infection population of T-helper lymphocytes is depleted", "when HIV anti-infective immunity is disrupted", "all statements are true"], c: [3], t: "s"},
    {q: "Active sensitization of the organism may be caused by:", o: ["the introduction of specific antibodies", "introduction of antigens", "the introduction of the sensitized lymphocytes-effectors", "introduction of immunostimulators", "administration of the immunosuppressants"], c: [1], t: "s"},
    {q: "What does not refer to primary immunodeficiencies:", o: ["HIV infection", "DiGeorge syndrome", "Bruton agammaglobulinemia", "agammaglobulinemia of Swiss type"], c: [0], t: "s"},
    {q: "Hereditary and congenital immunodeficiencies may be:", o: ["combined: with the defeat of the cell (T) and humoral (B) components of immunity", "with preferred defects of cellular immunity", "with preferred defects of antibody production by B-lymphocytes", "with defects of phagocytosis by microphages", "with defects of the system of mononuclear phagocytes"], c: [0, 1, 2, 4], t: "m"},
    {q: "Autoimmune diseases can be caused by:", o: ["disorders of the immune system, manifested in the appearance of antibodies to antigens of own normal cells", "protein denaturation of own cells and tissues", "formation of antibodies to proteins of cells and organs that are isolated in the ontogeny from the immune system", "formation of antibodies that cross-react with foreign and self proteins"], c: [0, 1, 2, 3], t: "m"},
    {q: "Secondary immunodeficiencies may occur when:", o: ["extensive burns", "X-ray irradiation, corticosteroid therapy, thymectomy", "leukemia", "viral, bacterial, fungal, protozoal infections and helminthoses", "malignant tumors", "all of the above"], c: [5], t: "s"},
    {q: "Immunodeficiencies may be based on insufficiency of the following factors and/or processes:", o: ["antibody production", "phagocytosis with involving of mononuclear phagocytes", "T-lymphocytes", "complement system", "all of the above"], c: [4], t: "s"},
    {q: "What cells of the immune system cells are the main target for the AIDS virus:", o: ["B-lymphocytes", "T-killers", "T-helper cells", "T-suppressors"], c: [2], t: "s"},
    {q: "What organs and tissues can be attributed to behind a barrier:", o: ["red blood cells", "lens of the eye", "colloid of the thyroid gland", "kidney", "gray matter of the brain", "testes"], c: [1, 2, 4, 5], t: "m"},
    {q: "Indicate diseases that are autoimmune:", o: ["Hashimoto thyroiditis", "serum sickness", "pollinosis", "rheumatoid arthritis", "systemic lupus erythematosus"], c: [0, 3, 4], t: "m"},
    {q: "What part of immunity plays the most significant role in causing of autoimmune diseases?", o: ["cell", "humoral"], c: [0], t: "s"},
    {q: "Indicate the primary immunodeficiencies:", o: ["thymic hypoplasia (DiGeorge syndrome)", "acquired immunodeficiency syndrome in childhood", "Bruton's agammaglobulinemia", "Klinefelter's syndrome"], c: [0, 2], t: "m"},
    {q: "Which of the following statements are true?", o: ["receptors for virus of HIV-infection is a molecule of CD4", "when HIV-infection is depleted population of T-lymphocytes helpers", "when HIV-infection is disrupted of the anti-infective immunity", "all statements are true"], c: [3], t: "s"},
    {q: "Is it true: pathogenetic essence of reaction graft versus host is that the cells contained in the graft, settle in the organism of recipient and damage its cell?", o: ["yes", "no"], c: [0], t: "s"},
    {q: "Indicate the cells, tissues and organs containing autoantigens:", o: ["the thyroid gland", "lens of the eye", "cells of the periosteum", "nerve cells"], c: [0, 1, 3], t: "m"},
    {q: "Which of the following pathological processes relate to typical forms of violation of immunity?", o: ["hypotrophy of thymus", "lymphadenopathy", "immunodeficiency states", "pathological tolerance", "lymphocytic leukemia", "reaction of graft-versus-host disease"], c: [2, 3, 5], t: "m"},
    {q: "What is one of the important differences between antigen-presenting cells of the immune system from other cells having phagocytic activity?", o: ["is not capable to completeness of phagocytosis", "have a more high phagocytic activity", "have the phagocytic activity only in cooperation with the T- and B-lymphocytes", "are able to transmit information about alien Ag to T- and B-lymphocytes"], c: [3], t: "s"},
    {q: "What cells of the transplanted tissue ensure the development of reaction graft versus host?", o: ["stromal", "blood cells contained in the transplanted organ", "cells of the immune system that are in the tissues", "the cells containing genes of major histocompatibility complex"], c: [2], t: "s"},
    {q: "Immunodeficiency states with predominant lesion of cellular immunity include:", o: ["DiGeorge syndrome", "Higashi syndrome", "Wiskott-Aldrich syndrome", "Louis-Bar syndrome"], c: [0, 2], t: "m"},
    {q: "Di Giorgi syndrome is characterized by the following features:", o: ["congenital pathology", "the genetic nature of the disease", "hypoplasia of the thymus", "hypocalcemia"], c: [0, 2, 3], t: "m"},
    {q: "Reduction of efficiency of phagocytosis is observed in the conditions of:", o: ["leukopenia", "activation of sympathoadrenal system", "activation of complement system", "deficit of opsonines"], c: [0, 3], t: "m"},
    {q: "The reasons for incomplete phagocytosis may be:", o: ["an excess amount of glucocorticoids in the blood", "a moderate increase of body temperature", "failure of the myeloperoxidase system of leukocytes", "hypergammaglobulinemia"], c: [0, 2], t: "m"},
    {q: "What is the role of B-lymphocyte in the antibody genesis?", o: ["convert antigen into an immunogenic form and differentiate into plasma cells -- antibody producers", "produce an inductor of the immunopoiesis", "stimulate T-cell system of lymphocytes", "under the influence of specific and non-specific signal derived from T-helper cells proliferate and differentiate into plasma cells -- antibody producers"], c: [3], t: "s"},
    {q: "What is the role of T-suppressors in immunity?", o: ["produce blocking antibodies", "inhibit phagocytosis", "inhibit formation of secondary endoallergens", "recognize antigens of own organism and form immune tolerance", "prevent autoimmune processes", "inhibit the differentiation of B-lymphocytes into plasma cells, and thereby inhibit antibody genesis", "inhibit the formation of sensitized lymphocytes, inhibiting cellular immunological reactions"], c: [3, 4, 5, 6], t: "m"},
    {q: "What is the role of T-effectors (killers, sensitized lymphocytes) in immunological reactions?", o: ["recognize antigen", "produce the antigen", "stimulate B- system of lymphocyte", "under the influence of antigenic stimulation proliferate to form a clone of sensitized T-lymphocytes (killers) and carry out immune reactions of the cellular type", "together with the T-suppressor involved in the formation of immunological tolerance"], c: [0, 3], t: "m"},
    {q: "Indicate reasons for primary immunodeficiencies:", o: ["toxic effects on the immune system in early childhood", "the effect of ionizing radiation", "frequent infections in childhood", "genetically determined blocks of lymphocytes at different stages of maturation"], c: [3], t: "s"},
    {q: "Indicate the most important immunological mechanisms of failure in immunoglobulin production:", o: ["defective of the B-system of lymphocytes", "defective of the T-helper cells", "excess (absolute or relative) and hyperactivity of the T-suppressors", "deficiency of the myeloperoxidase system of leukocytes"], c: [1, 2], t: "m"},
    {q: "Why does the deficit of protein in the body, caused by any reasons, lead to immunodeficiency?", o: ["lymphoid cells have the highest level of mitotic activity, and in conditions of protein deficit is suppressed regeneration of immune organs, in them atrophy develops with inhibition of function", "when protein deficiency is disrupted hormonal regulation of the immune response", "lymphoid cells have the lowest level of mitotic activity, and in conditions of protein deficiency is suppressed regeneration of immune organs, in them atrophy develops with inhibition of function"], c: [0, 1], t: "m"},
    {q: "What is the main danger of immunodeficient states?", o: ["in an increased tendency to infection, its chronization and generalization", "an increased tendency to neoplastic processes", "possibility of development of autoimmune diseases on the basis of immunodeficiency", "reduced propensity to neoplastic processes", "low propensity to infection, its chronization and generalization"], c: [0, 1, 2], t: "m"},
    {q: "The essence of the reaction transplant versus host is:", o: ["cells of the graft settle in the body of the recipient and damage its cells", "cells of the recipient damage the graft", "humoral immune response against the graft", "complement activation against the graft"], c: [0], t: "s"},
    {q: "Indicate cytotoxic mechanisms of tissue damage:", o: ["complement-dependent cytotoxicity", "antibody-dependent cell-mediated cytotoxicity", "cytotoxicity of T-killers", "cytotoxicity of NK cells"], c: [0, 1, 2, 3], t: "m"},
    {q: "Delayed type hypersensitivity is mediated by:", o: ["B-lymphocytes", "T-lymphocytes", "NK cells", "basophils"], c: [1], t: "s"},
    {q: "Immediate type hypersensitivity is mediated by:", o: ["IgE antibodies", "IgG antibodies", "IgM antibodies", "T-lymphocytes"], c: [0], t: "s"},
    {q: "Type I hypersensitivity reactions include:", o: ["anaphylactic shock", "hay fever", "bronchial asthma", "serum sickness"], c: [0, 1, 2], t: "m"},
    {q: "Type II hypersensitivity reactions include:", o: ["hemolytic disease of newborn", "blood transfusion reactions", "Goodpasture syndrome", "serum sickness"], c: [0, 1, 2], t: "m"},
    {q: "Type III hypersensitivity reactions include:", o: ["serum sickness", "Arthus reaction", "systemic lupus erythematosus", "contact dermatitis"], c: [0, 1, 2], t: "m"},
    {q: "Type IV hypersensitivity reactions include:", o: ["contact dermatitis", "tuberculin reaction", "transplant rejection", "anaphylaxis"], c: [0, 1, 2], t: "m"},
    {q: "Anaphylactic shock is an example of:", o: ["Type I hypersensitivity", "Type II hypersensitivity", "Type III hypersensitivity", "Type IV hypersensitivity"], c: [0], t: "s"},
    {q: "Contact dermatitis is an example of:", o: ["Type I hypersensitivity", "Type II hypersensitivity", "Type III hypersensitivity", "Type IV hypersensitivity"], c: [3], t: "s"},
    {q: "The cells involved in Type I hypersensitivity are:", o: ["mast cells", "basophils", "eosinophils", "T-lymphocytes"], c: [0, 1, 2], t: "m"},
    {q: "Mediators of Type I hypersensitivity include:", o: ["histamine", "leukotrienes", "prostaglandins", "all of the above"], c: [3], t: "s"},
    {q: "Atopy refers to:", o: ["genetic predisposition to allergic reactions", "acquired allergic reactions", "autoimmune diseases", "immunodeficiency states"], c: [0], t: "s"},
    {q: "Examples of atopic diseases include:", o: ["allergic rhinitis", "atopic dermatitis", "allergic asthma", "contact dermatitis"], c: [0, 1, 2], t: "m"}
  ]
};

// Quiz state
let state = {
  userName: '',
  selectedTopics: [1],
  currentQuestion: 0,
  userAnswers: [],
  correctCount: 0,
  showingFeedback: false,
  quizQuestions: []
};

function initHomePage() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';
  const topic = allTopics[0];
  const box = document.createElement('div');
  box.className = 'topic-box selected';
  box.innerHTML = `
    <div class="topic-number">Topic</div>
    <div class="topic-name">${topic.name}</div>
    <div class="topic-questions">${topic.questionCount} Questions</div>
  `;
  grid.appendChild(box);
  state.selectedTopics = [topic.id];
}

window.addEventListener('DOMContentLoaded', initHomePage);

function startQuiz() {
  const nameInput = document.getElementById('userName');
  const name = nameInput.value.trim();
  
  if (!name) {
    document.getElementById('nameError').style.display = 'block';
    return;
  }
  document.getElementById('nameError').style.display = 'none';
  state.userName = name;
  
  state.quizQuestions = [...quizDataBank[1]];
  state.currentQuestion = 0;
  state.userAnswers = new Array(state.quizQuestions.length).fill(null);
  state.correctCount = 0;
  state.showingFeedback = false;
  
  showPage('quizPage');
  createQuestionNavigator();
  displayQuestion();
}

function createQuestionNavigator() {
  const grid = document.getElementById('questionGrid');
  grid.innerHTML = '';
  
  for (let i = 0; i < state.quizQuestions.length; i++) {
    const box = document.createElement('div');
    box.className = 'question-box';
    box.textContent = i + 1;
    box.id = `qbox-${i}`;
    box.onclick = () => jumpToQuestion(i);
    grid.appendChild(box);
  }
  
  updateNavigatorStatus();
}

function jumpToQuestion(index) {
  if (!state.showingFeedback) {
    const answer = getCurrentAnswer();
    if (answer !== null) {
      const question = state.quizQuestions[state.currentQuestion];
      const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
        isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
      const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
      
      if (!wasCorrectBefore && isCorrectNow) {
        state.correctCount++;
      } else if (wasCorrectBefore && !isCorrectNow) {
        state.correctCount--;
      }
      
      state.userAnswers[state.currentQuestion] = answer;
    }
  }
  
  state.showingFeedback = false;
  state.currentQuestion = index;
  displayQuestion();
}

function updateNavigatorStatus() {
  for (let i = 0; i < state.quizQuestions.length; i++) {
    const box = document.getElementById(`qbox-${i}`);
    if (!box) continue;
    
    box.className = 'question-box';
    
    if (i === state.currentQuestion) {
      box.classList.add('current');
    }
    
    const answer = state.userAnswers[i];
    if (answer !== null) {
      const question = state.quizQuestions[i];
      const isCorrect = isAnswerCorrect(answer, question.c, question.t);
      
      if (isCorrect) {
        box.classList.add('correct');
      } else {
        box.classList.add('incorrect');
      }
    }
  }
}

function displayQuestion() {
  const question = state.quizQuestions[state.currentQuestion];
  const questionNum = state.currentQuestion + 1;
  const total = state.quizQuestions.length;
  
  document.getElementById('questionNumber').textContent = `Question ${questionNum} of ${total}`;
  document.getElementById('questionText').textContent = question.q;
  
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  const inputType = question.t === 's' ? 'radio' : 'checkbox';
  const inputName = question.t === 's' ? 'answer' : '';
  
  question.o.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const input = document.createElement('input');
    input.type = inputType;
    input.id = `option${index}`;
    input.value = index;
    if (inputType === 'radio') {
      input.name = inputName;
    }
    
    if (state.userAnswers[state.currentQuestion] !== null) {
      if (question.t === 's') {
        if (state.userAnswers[state.currentQuestion] === index) {
          input.checked = true;
        }
      } else {
        if (state.userAnswers[state.currentQuestion].includes(index)) {
          input.checked = true;
        }
      }
    }
    
    const label = document.createElement('label');
    label.htmlFor = `option${index}`;
    label.textContent = option;
    
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
    
    optionDiv.addEventListener('click', function(e) {
      if (e.target !== input) {
        input.checked = question.t === 's' ? true : !input.checked;
      }
      
      if (question.t === 's' && input.checked && !state.showingFeedback) {
        const answer = getCurrentAnswer();
        if (answer !== null) {
          const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
            isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
          const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
          
          if (!wasCorrectBefore && isCorrectNow) {
            state.correctCount++;
          } else if (wasCorrectBefore && !isCorrectNow) {
            state.correctCount--;
          }
          
          state.userAnswers[state.currentQuestion] = answer;
          updateProgress();
          updateNavigatorStatus();
          setTimeout(() => showFeedback(), 100);
        }
      }
    });
  });
  
  document.getElementById('prevBtn').disabled = state.currentQuestion === 0;
  
  const hasAnswer = state.userAnswers[state.currentQuestion] !== null;
  if (hasAnswer && !state.showingFeedback && question.t === 's') {
    setTimeout(() => showFeedback(), 0);
  }
  
  document.getElementById('nextBtn').textContent = 
    state.currentQuestion === total - 1 ? 'Finish' : 'Next';
  
  document.getElementById('answerError').style.display = 'none';
  
  updateProgress();
  updateNavigatorStatus();
}

function getCurrentAnswer() {
  const question = state.quizQuestions[state.currentQuestion];
  
  if (question.t === 's') {
    const selected = document.querySelector('input[name="answer"]:checked');
    return selected ? Number(selected.value) : null;
  } else {
    const checkboxes = document.querySelectorAll('#optionsContainer input[type="checkbox"]:checked');
    const selected = Array.from(checkboxes).map(cb => Number(cb.value));
    return selected.length > 0 ? selected : null;
  }
}

function isAnswerCorrect(answer, correct, t) {
  if (t === 's') {
    return answer === correct[0];
  } else {
    if (!answer || answer.length !== correct.length) return false;
    const sortedAnswer = [...answer].sort();
    const sortedCorrect = [...correct].sort();
    return sortedAnswer.every((val, idx) => val === sortedCorrect[idx]);
  }
}

function showFeedback() {
  const question = state.quizQuestions[state.currentQuestion];
  const options = document.querySelectorAll('#optionsContainer .option');
  
  options.forEach((optionDiv, index) => {
    const input = optionDiv.querySelector('input');
    input.disabled = true;
    optionDiv.classList.add('disabled');
    
    const isCorrectAnswer = question.c.includes(index);
    const isSelected = input.checked;
    
    if (isCorrectAnswer) {
      optionDiv.classList.add('correct');
    }
    if (isSelected && !isCorrectAnswer) {
      optionDiv.classList.add('incorrect');
    }
  });
  
  state.showingFeedback = true;
}

function nextQuestion() {
  const answer = getCurrentAnswer();
  
  if (!state.showingFeedback) {
    if (answer === null) {
      document.getElementById('answerError').style.display = 'block';
      return;
    }
    
    const question = state.quizQuestions[state.currentQuestion];
    const wasCorrectBefore = state.userAnswers[state.currentQuestion] !== null && 
      isAnswerCorrect(state.userAnswers[state.currentQuestion], question.c, question.t);
    const isCorrectNow = isAnswerCorrect(answer, question.c, question.t);
    
    if (!wasCorrectBefore && isCorrectNow) {
      state.correctCount++;
    } else if (wasCorrectBefore && !isCorrectNow) {
      state.correctCount--;
    }
    
    state.userAnswers[state.currentQuestion] = answer;
    updateProgress();
    updateNavigatorStatus();
    
    showFeedback();
    return;
  }
  
  state.showingFeedback = false;
  
  if (state.currentQuestion < state.quizQuestions.length - 1) {
    state.currentQuestion++;
    displayQuestion();
    updateNavigatorStatus();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (state.currentQuestion > 0) {
    state.showingFeedback = false;
    state.currentQuestion--;
    displayQuestion();
    updateNavigatorStatus();
  }
}

function updateProgress() {
  const total = state.quizQuestions.length;
  const percentage = Math.round((state.correctCount / total) * 100 * 100) / 100;
  const displayPercentage = percentage.toFixed(2);
  
  document.getElementById('progressText').textContent = `${displayPercentage}%`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
  document.getElementById('progressFill').textContent = `${displayPercentage}%`;
}

function showResults() {
  const total = state.quizQuestions.length;
  const percentage = Math.round((state.correctCount / total) * 100);
  
  document.getElementById('finalScore').textContent = `${percentage}%`;
  document.getElementById('scoreDetails').textContent = 
    `${state.correctCount} out of ${total} correct`;
  
  showPage('resultsPage');
}

function restartQuiz() {
  state = {
    userName: '',
    selectedTopics: [1],
    currentQuestion: 0,
    userAnswers: [],
    correctCount: 0,
    showingFeedback: false,
    quizQuestions: []
  };
  document.getElementById('userName').value = '';
  showPage('homePage');
  initHomePage();
}

function openReportModal() {
  const question = state.quizQuestions[state.currentQuestion];
  document.getElementById('reportQuestion').textContent = question.q;
  document.getElementById('reportText').value = '';
  document.getElementById('reportModal').classList.add('active');
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('active');
}

function submitReport() {
  const question = state.quizQuestions[state.currentQuestion];
  const feedback = document.getElementById('reportText').value.trim();
  
  if (!feedback) {
    alert('Please provide your correction or feedback.');
    return;
  }
  
  const reportData = {
    questionNumber: state.currentQuestion + 1,
    question: question.q,
    currentCorrectAnswer: question.c.map(idx => question.o[idx]).join(', '),
    userFeedback: feedback,
    studentName: state.userName
  };
  
  console.log('=== REPORT SUBMITTED ===');
  console.log('Question #:', reportData.questionNumber);
  console.log('Question:', reportData.question);
  console.log('Current Correct Answer:', reportData.currentCorrectAnswer);
  console.log('User Feedback:', reportData.userFeedback);
  console.log('Submitted by:', reportData.studentName);
  console.log('========================');
  
  alert(`Report submitted successfully!\n\nQuestion #${reportData.questionNumber}\nYour feedback: "${feedback}"\n\nThis has been logged to the console.`);
  
  closeReportModal();
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}