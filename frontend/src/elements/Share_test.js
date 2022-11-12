
const kakaoShare_test = () => {
    window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
            title: "W2P! 게임 유형 테스트 & 게임 추천",
            description: "MDTI 테스트 받고 경품까지!",
            imageUrl: "https://i.ibb.co/CV1X2FB/for-Share-Ka-Kao.png",
            link: {
                mobileWebUrl: "https://bit.ly/캐취업",
            },
        },
        itemContent: {
            titleImageUrl: "https://i.ibb.co/GCyyWZk/logo-KAKAO.png",
            titleImageText: "캐취업",
            titleImageCategory: "청년이룸",
        },
        buttons: [
            {
                title: "테스트 하러 가기",
                link: {
                    mobileWebUrl: "https://bit.ly/캐취업",
                },
            },
        ],
    });
};

const twitterShare_test = () => {
    var sendText = "W2P! 지금 바로 게임 성향 테스트 & 게임 추천 받으러가기";
    var sendUrl =
        "https://catchup.shop/                                                         ";
    var sendHashTag = "청년이룸,캐치업,MyDream,MDTI";
    window.open(
        "https://twitter.com/intent/tweet?text=" +
        sendText +
        "&url=" +
        sendUrl +
        "&hashtags=" +
        sendHashTag
    );
};

const facebookShare_test = () => {
    var sendUrl = "https://bit.ly/캐취업";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare_test, twitterShare_test, facebookShare_test };