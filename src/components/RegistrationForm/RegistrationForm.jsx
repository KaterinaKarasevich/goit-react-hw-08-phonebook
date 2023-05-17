import { useDispatch } from "react-redux";

import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button } from "components/RegistrationForm/RegistrationForm.styled"
import { register } from "redux/auth/operationAuth";
// import { getSignInInfo } from "redux/auth/operationAuth";
// import { toast } from "react-hot-toast";


export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
// export const RegistrationForm = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//     const dispatch = useDispatch();
  
//     const handleSubmit = async(e) => {
//      e.preventDefault();
//       const form = e.target;
    
      
//      const infoUser = {
//            name: form.elements.name.value,
//            email: form.elements.email.value,
//            password: form.elements.password.value,
//     }
//       dispatch(getSignInInfo(infoUser));
   
//      form.reset();
//    };
//    const handleChange =  ({target:{name, value}}) => {
//      if (name === "name") setName(value)
//      else if (name === "email") setEmail(value)
//      else if (name === "password") setPassword(value)
//    }
    
  return (     
        <Form onSubmit={handleSubmit} autoComplete="on">
        
          <FormGroup>
            <FormWrap>
              <FormLabel>User name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="User name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    // required
                    // onChange={handleChange}
                    // value={name}
              
                    />      
            </FormWrap>
            <FormWrap>
              <FormLabel>Email address</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    // onChange={handleChange}
                    // value={email}
                   />        
            </FormWrap>
            
            <FormWrap>
              <FormLabel>Password</FormLabel>
                <FormInput
                   type="password"
                   name="password"
                   placeholder="Password"
                  //  onChange={handleChange}
                  //  value={password}
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </Form>
 
        )
    }











