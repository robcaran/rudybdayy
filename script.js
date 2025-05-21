document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const submitButton = document.getElementById('submitName');
    const errorMessage = document.getElementById('errorMessage');
    const mainContent = document.querySelector('main');
    const birthdayContent = document.getElementById('birthdayContent');
    const mainPlaceholder = document.getElementById('mainPlaceholder');
    const modalContent = document.querySelector('.modal-content');

    // Initially hide the main content
    mainContent.style.display = 'none';

    function validateName(name) {
        const validNames = ['rudy', 'roy'];
        return validNames.includes(name.toLowerCase());
    }

    function showError(message, wiggle = false) {
        errorMessage.textContent = message;
        if (wiggle) {
            modalContent.classList.remove('wiggle'); // reset if already animating
            void modalContent.offsetWidth;
            modalContent.classList.add('wiggle');
        }
    }

    // Remove wiggle class after animation ends
    modalContent.addEventListener('animationend', () => {
        modalContent.classList.remove('wiggle');
    });

    function hideError() {
        errorMessage.textContent = '';
    }

    function getReasons() {
        return [
            'You make me feel loved every day.',
            'You cuddle Rigo like he\'s yours.',
            'You kiss me like you mean it.',
            'You suck my tongue like a pro.',
            'You believe in me when I don\'t.',
            'You encourage my studies constantly.',
            'You make me laugh with your stupid jokes.',
            'You\'re the reason I work out — I wanna look hot for you.',
            'You are relatively supportive of my obsession with computer mice.',
            'You listen to my random tangents.',
            'You are my favorite cuddle buddy.',
            'You make the best food.. seriously, husband material.',
            'You talk with me for hours and I never get bored of it.',
            'You motivate me to chase my dreams.',
            'You are Rigo\'s favorite human. Well.. one of them.',
            'You care about my happiness.',
            'You are so gentle with me.',
            'You\'re so damn hot.',
            'You make me feel like I\'m your world.',
            'You always text me good morning.',
            'You make even lazy days feel magical.',
            'You always check on me when I\'m sad.',
            'You\'re not afraid to show affection in public.',
            'You never judge me.',
            'You\'re my safe place.',
            'You let me be silly with you.',
            'You let me vent without trying to "fix" everything.',
            'You\'re so affectionate.',
            'You always want to kiss me.',
            'You touch me gently even when I don\'t ask.',
            'You make fun of my quirks in a loving way.',
            'You always hype me up.',
            'You respect my boundaries and moods.',
            'You are never too proud to say sorry.',
            'You\'re always excited to see me.',
            'You make me feel like the only person in the room.',
            'You handle my moods like a champ.',
            'You\'re supportive even when I doubt myself.',
            'You cuddle me until I fall asleep.',
            'You kiss me in ways that feel like true love.',
            'You spoil Rigo as much as I do.',
            'You\'re so humble even though you\'re amazing.',
            'You like talking about drapes/curtains with me.',
            'You are my biggest fan.',
            'You let me geek out about the most random stuff.',
            'You\'re patient with me when I overthink.',
            'You look at me like I\'m the only one you see.',
            'You\'re so thoughtful with your surprises.',
            'You make even my anxious days feel calmer.',
            'You remember the little things I say.',
            'You\'re adventurous and open-minded.',
            'You talk to Rigo like he\'s a person (and I love it).',
            'You love cuddling just as much as I do.',
            'You hype me up when I\'m feeling down.',
            'You make the best chilli ever.',
            'You like my body and you show it.',
            'You\'re not afraid to be goofy.',
            'You make me feel proud of who I am.',
            'You keep things exciting between us.',
            'You\'re my calm in the chaos.',
            'You let me be clingy without making me feel annoying.',
            'You\'re always open to deep talks.',
            'You show up when it matters most.',
            'You always try to understand my point of view.',
            'You never let a day go by without showing love.',
            'You are so good at making out.',
            'You inspire me to be better.',
            'You hype up my creativity.',
            'You have the sexiest legs.',
            'You have an even sexier body and face.',
            'You accept all of me, even the weird parts.',
            'You spoil me.',
            'You celebrate my wins like they\'re yours.',
            'You share your world with me.',
            'Did I mention how handsome and sexy you are?',
            'You don\'t care when I look a mess or don\'t have facial hair.',
            'You always kiss me like it\'s the first time.',
            'You love the desert like me.',
            'You give me forehead kisses.',
            'You\'re always curious about what I think.',
            'You make me feel like the luckiest person alive.',
            'You challenge me in the best ways.',
            'You want to walk Rigo with me.',
            'You always want to spend time with me.',
            'You are so clever.',
            'You are so witty',
            'You have the kindest eyes.',
            'You\'re the most comforting person I know.',
            'You believe in my dreams more than I do.',
            'You make me feel adored.',
            'You\'re so romantic, even when you\'re subtle.',
            'You let me rest my head on your chest and stay there.',
            'You are the best tutor.',
            'You make love feel easy.',
            'You make me want to be the best version of myself.',
            'You are effortlessly funny.',
            'You keep me grounded.',
            'You make every day better.',
            'You\'re my home.',
            'You are my forever.'
        ];
    }

    function showBirthdayContent() {
        // Hide the placeholder section
        if (mainPlaceholder) mainPlaceholder.style.display = 'none';
        // Show the birthday content
        birthdayContent.style.display = 'block';
        // Add the heading, subtitle, and reasons
        const heading = '<h1 style="margin-bottom:1rem;">Happy Early Birthday my sweet and handsome boyfriend! 66 has never looked better, really!</h1>';
        const subtitle = '<div class="subtitle">just a few reasons why you are so amazing</div>';
        const reasons = getReasons().map(reason => `<li>${reason}</li>`).join('');
        birthdayContent.innerHTML = `${heading}${subtitle}<ol style="text-align:left; max-width:700px; margin:0 auto;">${reasons}</ol>`;
    }

    function handleSubmit() {
        const name = nameInput.value.trim();
        
        if (!name) {
            showError('Please enter a name', true);
            return;
        }

        if (validateName(name)) {
            modal.classList.add('hidden');
            mainContent.style.display = 'block';
            hideError();
            showBirthdayContent();
        } else {
            showError('Sorry, only Rudy or Roy are allowed', true);
        }
    }

    // Handle submit button click
    submitButton.addEventListener('click', handleSubmit);

    // Handle Enter key press
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });

    // Focus the input when the page loads
    nameInput.focus();
}); 