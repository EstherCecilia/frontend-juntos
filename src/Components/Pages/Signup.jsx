import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import TextField from "./atoms/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import backgroundImage from "../../images/background.jpeg";
import BurgerMenu from "./BurgerMenu";

const SignupForm = props => {
  const { handleSubmit } = props;
  const [gender, setGender] = useState("");

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BurgerMenu />
      <StyledMainDiv>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>CADASTRO</h1>
          <StyledOtherDiv>
            <TextField
              show
              type="text"
              width="180px"
              id="nome"
              placeholder="Nome"
            />
    
            <TextField
              show
              type="text"
              width="180px"
              id="curso"
              placeholder="Curso"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="text"
              width="180px"
              id="matricula"
              placeholder="Matricula"
            />
            <TextField
              show
              type="text"
              width="180px"
              id="telefone"
              placeholder="Telefone"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <FormControl style={{ width: "180px" }}>
              <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="sexo"
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <MenuItem value={"Feminino"}>Feminino</MenuItem>
                <MenuItem value={"Masculino"}>Masculino</MenuItem>
                <MenuItem value={"NaoInformado"}>Não informar</MenuItem>
              </Select>
            </FormControl>
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="180px"
              id="email"
              placeholder="Email"
            />
            <TextField
              show
              type="text"
              width="180px"
              id="data"
              placeholder="Data de Nascimento"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="password"
              width="180px"
              id="senha"
              placeholder="Senha"
            />
            <TextField
              show
              type="password"
              width="180px"
              id="senhaConfirma"
              placeholder="Confirmar senha"
            />
          </StyledOtherDiv>

          <Button
            type="submit"
            style={{ width: "200px", borderRadius:"10px", color:"#fafafa"}}
            color="primary"
            className={classes.submit}
          >
            Inscrever-se
          </Button>
          <Link style={{color:"#ff2e63"}} to="/login">
            <p style={{color:"#FF2E63"}}>Já é cadastrado?</p>
          </Link>
        </form>
      </StyledMainDiv>
    </ThemeProvider>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },

  input: {
    width: "100%",
    height: "32px",
    fontSize: "14px",
    display: "center",
    color: "#000",
    border: 0,
    borderBottom: ("1px", "solid", "#0D0C1D")
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "center",
    backgroundColor: "#000",
    color: "#fafafa"
  },
  divSubmit: { display: "-webkit-inline-box", margin: "auto" }
}));

const StyledMainDiv = styled.div`
  background-attachment: fixed;
  /* width: 320px; */
  background-image: url(${backgroundImage});
  border-radius: 2px;
  padding: 30px 20px;
  margin: 0 auto;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: ${({ theme }) => theme.primaryRed};
  }

  form {
    margin-left: auto;
    margin-right: auto;
  }

  button[type="submit"] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: ${({ theme }) => theme.primaryRed};
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    cursor: pointer;
    transition: background 0.5s;
  }
`;

const StyledOtherDiv = styled.div`
  margin-top: 20px;

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: grey;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
  }

  label {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
`;

/*const StyledDivRadio = styled.div`
    div {
        color: ${({theme}) => theme.primaryRed};
    }

    label {
        color: ${({theme}) => theme.primaryRed};
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin-top: 20px;
        padding-bottom: 10px;
    }

    input {
        font-weight: bold;
        display: inline;
        cursor: pointer;
        border-radius: 50%;
        color: ${({theme}) => theme.primaryRed};
    }

`;*/

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SignupForm);
