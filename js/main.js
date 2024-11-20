
//GSAPのレスポンシブ対応　メディアクエリの関数
const mm = gsap.matchMedia()
//端末の画面幅が1025px以上のとき（PC）
mm.add("(min-width: 1025px)",() => {

    gsap.fromTo(
        ".header",
        1,
        {
            backgroundColor:"0"
        },
        {
            backgroundColor:"rgba(#3C2F10,0.3)",
            scrollTrigger:{
                trigger:".concept",
                start:"top top"
            }
        }

    )
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            x: -100,
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
                makers: false
            }
        }
    )
    
    gsap.fromTo(
        ".column-right .column-right__photo",
        1,
        {
            x: 100,
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            delay:0.5,
            scrollTrigger:{
                trigger: ".column-right .column-right__photo",
                start: "top center",
                makers: false
            }
        }
    )
    gsap.fromTo(
        ".concept-second .column-left",
        1,
        {
            x: -100,
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            delay:0.5,
            scrollTrigger:{
                trigger: ".concept-second .column-left",
                start: "top center",
                makers: false
            }
        }
    )
    gsap.fromTo(
        ".concept-second .column-right",
        1,
        {
            x: 100,
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-second .column-right",
                start: "top center",
                makers: false
            }
        }
    )

    gsap.fromTo(
        ".works-items .works-item",
        1,
        {
           opacity:0
        },
        {
            opacity: 1,
            scrollTrigger:{
                trigger: ".works-items",
                start: "top center",
                makers: false
            },
            stagger:{each:0.2}
        }
    )
    gsap.fromTo(
        ".news-items",
        1,
        {
           opacity:0
        },
        {
            opacity: 1,
            scrollTrigger:{
                trigger: ".news-items",
                start: "top center",
                makers: false
            }
        }
    )

    gsap.fromTo(
        ".rooms .room",
        1,
        {
            opacity:0
        },
        {
            opacity:1,
            scrollTrigger:{
                trigger: ".rooms",
                start:"top center",
                makers:false
            },
            stagger:{each:0.2}
        }
    )

    gsap.fromTo(
        ".contact .contact__message",
        1,
        {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:".contact",
                start:"top center",
                makers:false
            }
        }
    )
})


//端末の画面幅が599px以下のとき（スマホ）
mm.add("(max-width: 599px)",() => {

    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            y: 100,
            opacity:0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
                makers: false
            }
        }
    )
    
    gsap.fromTo(
        ".column-right .column-right__photo",
        1,
        {
            y: 100,
            opacity:0
        },
        {
            y: 0,
            opacity: 1,
            delay:0.5,
            scrollTrigger:{
                trigger: ".column-right .column-right__photo",
                start: "top center",
                makers: false
            }
        }
    )
    gsap.fromTo(
        ".concept-second .column-right",
        1,
        {
            x: -100,
            opacity:0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-right",
                start: "center center",
                makers: false
            }
        }
    )

    gsap.fromTo(
        ".concept-second .column-left",
        1,
        {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            scrollTrigger: {
                trigger: ".concept-second .column-left",
                start:"top center",
                makers:false
            }
        }
    )

    gsap.fromTo(
        ".works-items .works-item",
        1,
        {
            opacity:0
        },
        {
            opacity:1,
            scrollTrigger:{
                trigger: ".works-items",
                start:"top center",
                makers:
                false
            },
            stagger:{each:0.2}
        }
    )
    gsap.fromTo(
        ".news-items",
        1,
        {
            y:50,
            opacity:0

        },
        {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger: ".news-items",
                start: "top center",
                makers:false

            }

        }
    )
    
    gsap.fromTo(
        ".rooms .room",
        1,
        {
            opacity:0
        },
        {
            opacity:1,
            scrollTrigger:{
                trigger: ".rooms",
                start:"top center",
                makers:
                false
            },
            stagger:{each:0.2}
        }
    )
    gsap.fromTo(
        ".contact .contact__message",
        1,
        {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:".contact",
                start:"top center",
                makers:false
            }
        }
    )

})
