
const kakaoShare_test = () => {
    window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
            title: "W2P! 게임 유형 테스트 & 게임 추천",
            description: "게임사가 보는 나의 유형은? + 모바일 게임 추천 서비스!",
            imageUrl: "https://i.ibb.co/CV1X2FB/for-Share-Ka-Kao.png",
            link: {
                mobileWebUrl: "http://118.67.143.133/",
            },
        },
        itemContent: {
            titleImageUrl: "https://i.ibb.co/GCyyWZk/logo-KAKAO.png",
            titleImageText: "W2P",
        },
        buttons: [
            {
                title: "테스트 하러 가기",
                link: {
                    mobileWebUrl: "http://118.67.143.133/",
                },
            },
        ],
    });
};

const twitterShare_test = () => {
    var sendText = "W2P! 지금 바로 게임 성향 테스트 & 게임 추천 받으러가기";
    var sendUrl =
        "http://118.67.143.133/                                                       ";
    window.open(
        "https://twitter.com/intent/tweet?text=" +
        sendText +
        "&url=" +
        sendUrl
    );
};

const facebookShare_test = () => {
    var sendUrl = "http://118.67.143.133/";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare_test, twitterShare_test, facebookShare_test };