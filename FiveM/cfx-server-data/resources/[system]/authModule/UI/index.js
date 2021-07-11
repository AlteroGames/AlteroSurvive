const messages = {
    en: {
        message: {
            authTab: "Sign In",
            registerTab: "Sign Up",
            loginLabel: "Login:",
            loginDanger: "Minimum login length 4 characters",
            passwordLabel: "Password:",
            passwordDanger: "Minimum password length 4 characters",
            authButton: "LogIn",
            selectLanguage: "Select Language",
            registerEmailLabel: "Email:",
            registerEmailDanger: "Email is not valid",
            registerButton: "Register account",
        },
    },
    ru: {
        message: {
            authTab: "Вход",
            registerTab: "Регистрация",
            loginLabel: "Логин:",
            loginDanger: "Минимальная длина логина 4 символа",
            passwordLabel: "Пароль:",
            passwordDanger: "Минимальная длина пароля 4 символа",
            authButton: "Войти в аккаунт",
            selectLanguage: "Выбрать язык",
            registerEmailLabel: "Почта:",
            registerEmailDanger: "Вы указали неверный email",
            registerButton: "Зарегистрироваться",
        },
    },
};

const i18n = new VueI18n({
    locale: "ru", // set locale
    messages, // set locale messages
});

const app = new Vue({
    el: "#app",
    i18n,
    data() {
        return {
            isLogin: true,
            authLogin: "",
            authPassword: "",
            registerLogin: "",
            registerEmail: "",
            registerPassword: "",
            isActiveLoginTab: true,
            isActiveRegisterTab: false,
            listener: null,
            showView: true,
        };
    },
    computed: {
        checkEmail() {
            const regExp = new RegExp(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            return regExp.test(String(this.registerEmail).toLowerCase());
        },
    },
    //Если работаете через браузер то закомментить метод mounted, если через игру, то раскомментить ;)
    // mounted() {
    //     this.listener = window.addEventListener('message', (event) => {
    //         const item = event.data || event.detail;
    //         const data = JSON.stringify(item);
    //         if (data.showui == true) {
    //             this.showView = true;
    //         } else {
    //             this.showView = false;
    //         }
    //     }, false);
    // },
    destroyed() {
        window.removeEventListener("message", this.listener);
    },
    methods: {
        showLoginTab() {
            this.isLogin = true;
            this.isActiveLoginTab = true;
            this.isActiveRegisterTab = false;
        },
        showRegisterTab() {
            this.isLogin = false;
            this.isActiveLoginTab = false;
            this.isActiveRegisterTab = true;
        },
        logIn(event) {
            if (this.authLogin.length > 3 && this.authPassword.length > 3) {
                let data = {
                    login: this.authLogin,
                    password: this.authPassword,
                };
                axios
                    .post(`https://${GetParentResourceName()}/get-data`, JSON.stringify(data), {
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                        }
                    })
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
            }
        },
        signIn(event) {
            if (
                this.registerLogin.length > 3 &&
                this.registerPassword.length > 3 &&
                this.checkEmail
            ) {
                console.log("registerSuccess");
            }
        },
    },
});
