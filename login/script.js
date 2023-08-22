// ユーザーデータリスト
const userDataList = [
    {id: 1234, password: "password", name: "太郎"},
    {id: 2345, password: "aiueo", name: "次郎"}
];


const loginButton = document.getElementById('login-button');

// ログインボタン押下で作動
loginButton.addEventListener('click', () => {
    const searchId = document.querySelector('#search-id').value;
    const searchPassword = document.querySelector('#search-password').value;
    findUser(searchId, searchPassword);
});

// 登録しているユーザーを検索する
// 該当データを取得する
function findUser(searchId, searchPassword) {
    const targetData = userDataList.find(data => data.id === parseInt(searchId) && data.password === searchPassword);

    // 該当データなしの場合、エラーメッセージを表示して終了
    if (!targetData) {
        alert("IDまたはパスワードが違います");
        return;
    }
    
    // トップ画面へ遷移
    window.open('https://emotopi.com/', '_blank');
  }