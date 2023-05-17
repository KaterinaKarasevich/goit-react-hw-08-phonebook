import { useDispatch } from "react-redux";
import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button } from "components/LoginForm/LoginForm.styled"
import { logIn } from "redux/auth/operationAuth";

 export const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const infoUser = {
           email: form.elements.email.value,
           password: form.elements.password.value,
    }
     dispatch(logIn(infoUser));
   
     form.reset();
   };
    
  return (     
        <Form onSubmit={handleSubmit} autoComplete="off">
        
          <FormGroup>
            <FormWrap>
              <FormLabel>Email address</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Email"
                   />        
            </FormWrap>
            
            <FormWrap>
              <FormLabel>Password</FormLabel>
                <FormInput
                   type="password"
                   name="password"
                   placeholder="Password"
                 />
              
            </FormWrap>
          </FormGroup>
          <Button type="submit">Log In</Button>
        </Form>
 
        )
    }















