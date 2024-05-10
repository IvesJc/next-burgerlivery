'use client'

import { Form, Field, Formik, ErrorMessage } from "formik"
import * as yup from "yup"
import { cpf } from "cpf-cnpj-validator"

export default function Cadastro() {

    const initialFields = {
        nome: "",
        email: "",
        password: "",
        cpf: "",
        cep: ""
    }

    const validationSchema = yup.object().shape({
        nome: yup.string().min(2, "Nome muito curto").required("Nome obrigatório"),
        email: yup.string().email("Informe um email valido").required("Email obrigatório"),
        password: yup.string().min(6, "Senha muito curta").required("Senha obrigatória"),
        cpf: yup.string().required("CPF obrigatório").test((value) => cpf.isValid(value)),
        cep: yup.string().required("CEP obrigatório"),
    })
    return (
        <Formik initialValues={initialFields}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}>
            <Form>
                <label htmlFor="nome">Nome</label>
                <br />
                <Field type="text" name="nome" id="nome" />
                <ErrorMessage component="span" name="nome" />
                <br />

                <br />
                <label htmlFor="email">Email</label>
                <br />
                <Field type="text" name="email" id="email" />
                <ErrorMessage component="span" name="email" />
                <br />

                <br />
                <label htmlFor="password">Senha</label>
                <br />
                <Field type="password" name="password" id="password" />
                <ErrorMessage component="span" name="password" />
                <br />

                <br />
                <label htmlFor="cpf">CPF</label>
                <br />
                <Field type="text" name="cpf" id="cpf" />
                <ErrorMessage component="span" name="cpf" />
                <br />

                <br />
                <label htmlFor="cep">CEP</label>
                <br />
                <Field type="text" name="cep" id="cep" />
                <ErrorMessage component="span" name="cep" />
                <br />

                <br />
                <label htmlFor="mensagem">Mensagem</label>
                <br />
                <Field component="textarea" type="text" name="mensagem" id="mensagem" />
                <ErrorMessage component="span" name="mensagem" />
                <br />

                <button type="submit">Cadastrar</button>
            </Form>
        </Formik>
    )
}