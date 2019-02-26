import React from 'react';
import axios from 'axios';
import { Form, Message, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const floorsOptions = [
    { key: "1", text: "1", value: "1" },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
    { key: '8', text: '8', value: '8' },
    { key: '9', text: '9', value: '9' },
    { key: '10', text: '10', value: '10' },
    { key: '11', text: '11', value: '11' },
    { key: '12', text: '12', value: '12' },
    { key: '13', text: '13', value: '13' },
    { key: '14', text: '14', value: '14' },
    { key: '15', text: '15', value: '15' },
    { key: '16', text: '16', value: '16' },
];

const roomNmbOptions = [
    { key: '3', text: '3', value: '03' },
    { key: '4', text: '4', value: '04' },
    { key: '5', text: '5', value: '05' },
    { key: '6', text: '6', value: '06' },
    { key: '7', text: '7', value: '07' },
    { key: '8', text: '8', value: '08' },
    { key: '9', text: '9', value: '09' },
    { key: '10', text: '10', value: '10' },
    { key: '11', text: '11', value: '11' },
    { key: '12', text: '12', value: '12' },
    { key: '13', text: '13', value: '13' },
    { key: '14', text: '14', value: '14' },
    { key: '15', text: '15', value: '15' },
    { key: '16', text: '16', value: '16' },
];



class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            floor: '',
            roomNmb: '',
            room: '',
            email: '',
            password: '',
            password2: '',
            errorMessage: [],
            isValid: Boolean
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {
        // username
        if (e.target.name === "username") {
            this.setState({
                username: e.target.value
            });
        }

        // firstname
        if (e.target.name === "firstname") {
            this.setState({
                firstname: e.target.value
            });
        }

        // lastname
        if (e.target.name === "lastname") {
            this.setState({
                lastname: e.target.value
            });
        }

        // email
        if (e.target.name === "email") {
            this.setState({
                email: e.target.value
            });
        }

        // password
        if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            });
        }

        // password2
        if (e.target.name === "password2") {
            this.setState({
                password2: e.target.value
            });
        }
    }

    handleTextFloorChange = (e, { value }) => this.setState({ floor: value })
    handleTextRoomNmbChange = (e, { value }) => this.setState({ roomNmb: value })

    validateInputs() {
        const username = this.state.username;
        let doExist;
        const firstname = this.state.firstname;
        const lastname = this.state.lastname;
        const floor = this.state.floor;
        const roomNmb = this.state.roomNmb;
        const room = floor + roomNmb;
        const email = this.state.email;
        const password = this.state.password;
        const password2 = this.state.password2;

        this.state.errorMessage.length = 0;

        if(username.length >= 3 && username.length < 20) {
            this.checkIfUserExist()
            .then(doExist => {
                if(this.state.doExist == true) {
                    this.state.errorMessage.push(`Podana nazwa użytkownika już istnieje.`);
                    this.forceUpdate();
                }
            });
        } else {
            this.state.errorMessage.push(`Nazwa użytkownika powinna być dłuższa niż 3 znaki oraz krótsza niż 20 znaków.`);
        }

        // firstname
        if (firstname.length === 0) {
            this.state.errorMessage.push(`Imię nie może być puste.`);
        }
        if (firstname.length >= 20) {
            this.state.errorMessage.push(`Imię musi być krótsza niż 20.`);
        }

        // lastname        
        if (lastname.length === 0) {
            this.state.errorMessage.push(`Nazwisko nie może być puste.`);
        }
        if (lastname.length >= 30) {
            this.state.errorMessage.push(`Nazwisko musi być krótsza niż 30.`);
        }

        // room
        if (floor.length === 0) {
            this.state.errorMessage.push(`Piętro nie może być puste.`)
        }
        if (roomNmb.length === 0) {
            this.state.errorMessage.push(`Numer pokoju nie może być pusty.`)
        }

        this.setState({ room: room });

        // email
        if (!email.includes("@") || !email.includes(".")) {
            this.state.errorMessage.push(`Nieprawidłowy mail.`);
        }

        // passwords
        if (password !== password2) {
            this.state.errorMessage.push(`Hasła nie są identyczne.`);
        } else {
            if (password.length < 4) {
                if (password.length === 0 || password2.length === 0) {
                    this.state.errorMessage.push(`Hasło nie może być puste.`);
                } else {
                    this.state.errorMessage.push(`Hasło musi być dłuższe niż 3.`);
                }
            }
            if (password.length >= 20) {
                this.state.errorMessage.push(`Hasło musi być krótsze niż 20.`);
            }
        }

        if (this.state.errorMessage.length !== 0) {
            return false;
        } else {
            return true;
        }
    }

    // checkIfUserExistInDb2() {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`/api/user/checkIfUserExist/${this.state.username}`
    //         ).then(res => {
    //             resolve(res.data);
    //         });
    //     });        
    // }

    async checkIfUserExist() {
        const doExist = await fetch(`/api/user/checkIfUserExist/${this.state.username}`)
        .then(res => res.json());
        console.log(`0. ${doExist}`);
        this.setState({ doExist: doExist});
        return doExist;
    }

    checkIfUserExistInDb() {
        axios.get(`/api/user/checkIfUserExist/${this.state.username}`)
        .then(res => {
            return res.data;
        });
    }

    registerUser = () => {
        axios.post('/api/user/create', {
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            room: this.state.room,
            email: this.state.email,
            password: this.state.password
        });
    }

    handleSubmit(e) {
        if (this.validateInputs() === true) {
            this.setState({ isValid: true });
            this.registerUser();
        } else {
            this.setState({ isValid: false });
        }
    }

    // RENDER
    render() {
        return (
            <>
                {this.state.isValid === false
                    ?
                    <div>
                        <Message error>
                            <Message.Header>Nieprawidłowe dane</Message.Header>
                            <Message.List>
                                {this.state.errorMessage.map(mess => (
                                    <Message.Item key={mess}>{mess}</Message.Item>
                                ))}
                            </Message.List>
                        </Message>
                    </div>
                    : <></>
                }

                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                            fluid
                            label="Nazwa użytkownika"
                            placeholder="Nazwa użytkownika"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleTextChange} />

                        <Form.Group
                            widths='equal'>
                            <Form.Input
                                fluid label="Imie"
                                placeholder="Imie"
                                name="firstname"
                                value={this.state.firstname}
                                onChange={this.handleTextChange} />

                            <Form.Input
                                fluid
                                label="Nazwisko"
                                placeholder="Nazwisko"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.handleTextChange} />
                        </Form.Group>

                        <Form.Group
                            widths='equal'>

                            <Form.Select
                                fluid
                                label="Piętro"
                                placeholder="Piętro"
                                name="floor"
                                options={floorsOptions}
                                value={this.state.floor}
                                onChange={this.handleTextFloorChange} />

                            <Form.Select
                                fluid
                                label="Numer pokoju"
                                placeholder="Numer pokoju"
                                name="roomNmb"
                                options={roomNmbOptions}
                                value={this.state.roomNmb}
                                onChange={this.handleTextRoomNmbChange} />
                        </Form.Group>

                        <Form.Input
                            fluid
                            label="E-mail"
                            placeholder="E-mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleTextChange} />

                        <Form.Group
                            widths="equal">
                            <Form.Input
                                fluid
                                type="password"
                                label="Hasło"
                                placeholder="Hasło"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleTextChange} />

                            <Form.Input
                                fluid
                                type="password"
                                label="Powtórz hasło"
                                placeholder="Powtórz hasło"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.handleTextChange} />
                        </Form.Group>

                        <Button type="submit">Zarejestruj</Button>
                    </Form>
                   

                </div>
            </>
        )
    }

}

export default RegisterPage;