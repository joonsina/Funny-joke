const jokes = [
    "استاد: بیٹا تم نے کبھی کوئی ایسا کام کیا ہے جس سے سب خوش ہوئے ہوں؟\n\nبچہ: جی ہاں سر! ایک بار میں نے اسکول کی گھنٹی وقت سے پہلے بجا دی تھی! 😆😂",
    "بیوی: تم مجھ سے کتنی محبت کرتے ہو؟\n\nشوہر: شہد کی مکھیوں جتنی! 😄\n\nبیوی: واہ! مطلب بہت زیادہ؟\n\nشوہر: نہیں، جب تم آتی ہو تو میں بھاگ جاتا ہوں! 🤣😂",
    "ڈاکٹر: تم سگریٹ کیوں پیتے ہو؟\n\nمریض: کیونکہ یہ میری پریشانیاں کم کرتی ہے! 🤔\n\nڈاکٹر: تو یہ بتاؤ، جب سگریٹ ختم ہو جاتی ہے، تو کیا پریشانی کم ہوتی ہے؟\n\nمریض: نہیں، اور بڑھ جاتی ہے! 😆😂"
];

function showJoke() {
    const jokeElement = document.getElementById("joke");
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeElement.innerHTML = randomJoke;
}

// Show a new joke every 10 seconds
setInterval(showJoke, 10000);

// Adsterra Direct Link Ad every 30 seconds
setInterval(() => {
    window.open("https://www.effectiveratecpm.com/nx7twrw2p?key=87437c80b58f26dbe185ba0920be5f96");
}, 30000);
