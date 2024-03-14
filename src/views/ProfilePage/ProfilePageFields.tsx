import { Input } from "../../components/FormInputs";

const LoginPageFields: Input[] = [
  {
    id: 1,
    size: "medium",
    name: "user_email_id",
    type: "text",
    text_type: "string",
    placeholder: "raj_car@gmail.com",
    label: "Email ID",
    isDisabled: true,
    datatestid: "loginemailid",
    required: true,
  },
  {
    id: 4,
    size: "medium",
    name: "user_mobile",
    type: "text",
    text_type: "text",
    placeholder: "9612347132",
    label: "Mobile Number",
    datatestid: "loginemobileno",
    isDisabled: true,
    required: true,
  },
  {
    id: 2,
    size: "medium",
    name: "user_old_password",
    type: "text",
    text_type: "password",
    placeholder: "Old Password",
    label: "Old Password",
    datatestid: "resetoldpassword",
    required: true,
  },
  {
    id: 3,
    size: "medium",
    name: "user_password",
    type: "text",
    text_type: "password",
    placeholder: "New Password",
    label: "New Password",
    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+{}|;:'",.<>?]).{10,100}$/, //contains 1-special char, capital letter, number and should have 10 to 100 characters
    minlen:10,
    maxlen:100,
    errorMessage: "Password should be 10 characters long. Add special characters, number and Capital Letters.",
    datatestid: "resetnewpassword",
    required: true,
  },
  {
    id: 5,
    size: "medium",
    name: "user_confirm_password",
    type: "text",
    text_type: "password",
    placeholder: "Confirm New Password",
    label: "Confirm New Password",
    datatestid: "resetconfirmnewpassword",
    required: true,
  },
];

export default LoginPageFields;
