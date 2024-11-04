// 初期設定
let points = 0;
let level = 1;

// ステータス基準設定
const sleepThreshold = { min: 7, max: 9 };
const foodThreshold = { min: 2, max: 4 };
const exerciseThreshold = { min: 1, max: 2 };

// レベルアップごとの画像とメッセージ
const levelImages = {
    1: 'img/egg.png',
    2: 'img/hato1.png',
    3: 'img/hato2.png',
    4: 'img/hato3.png',
    5: 'img/hato5.png',
    6: 'img/hato6.png',
    7: 'img/hato7.png',
};
const levelMessages = {
    2: "卵から生まれました！明日は好いことがあるよ！",
    3: "その調子で！明日は素敵な出会いがあるよ！",
    4: "成長したね！明日は仕事で褒められるよ！",
    5: "この調子で！今日もぐっすり眠れそうだね！",
    6: "順調だね！明日は充実した1日になるよ！",
    7: "だいぶ成長したよ！好きなことで気分転換しよう！",
};

// ポイントとレベルの更新
function updateStatus() {
    $('#points').text(points);
    $('#level').text(level);
    $('#character').attr('src', levelImages[level]);
}

// メッセージを表示
function showMessage(message) {
    $('#message').text(message).css("opacity", 1);
    // setTimeout(() => $('#message').css("opacity", 0), 2000); // フェードアウト
}

// ポイント計算関数
function calculatePoints() {
    let sleep = parseInt($('#sleep').val());
    let food = parseInt($('#food').val());
    let exercise = parseInt($('#exercise').val());

    // ポイント加算条件
    if (sleep >= sleepThreshold.min && sleep <= sleepThreshold.max) {
        points += 10;
    }
    if (food >= foodThreshold.min && food <= foodThreshold.max) {
        points += 10;
    }
    if (exercise >= exerciseThreshold.min && exercise <= exerciseThreshold.max) {
        points += 10;
    }

    // レベルアップ処理
    let previousLevel = level;
    if (points >= 30 && level === 1) {
        level = 2;
    } else if (points >= 60 && level === 2) {
        level = 3;
    } else if (points >= 90 && level === 3) {
        level = 4;
    } else if (points >= 90 && level === 4) {
        level = 5;
    } else if (points >= 90 && level === 5) {
        level = 6;
    } else if (points >= 90 && level === 6) {
        level = 7;
    }

    // レベルが上がった場合、メッセージを表示
    if (level > previousLevel) {
        showMessage(levelMessages[level]);
    }

    // ステータスを更新
    updateStatus();
    }
   
   // イベントハンドラー
$('#calculate').on('click', function () {
    calculatePoints();
});