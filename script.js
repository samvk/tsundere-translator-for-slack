const thesaurus = new Map();
thesaurus.set(/^no\.?$/, 'I love you');
thesaurus.set(/^ug+\.?$/, "You're my best friend");

const translate = (input) => (
    [...thesaurus.entries()].reduce((output, [ key, value ]) => output.replace(key, value), input)
);

const $messages = document.getElementsByClassName('c-message__body');
const $messageContainer = document.getElementsByClassName('c-virtual_list__scroll_container')[0];

const translator = () => {
    for (const $message of $messages) {
        $message.innerHTML = translate($message.innerHTML);
    }
}

const observer = new MutationObserver(translator);
observer.observe($messageContainer, {
  childList: true,
});

translator();
