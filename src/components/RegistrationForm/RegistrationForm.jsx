import { useDispatch } from "react-redux";

import { Form, FormGroup, FormWrap, FormLabel, FormInput, Button } from "components/RegistrationForm/RegistrationForm.styled"
import { register } from "redux/auth/operationAuth";

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

  return (    


        <Form onSubmit={handleSubmit} autoComplete="on">
        
          <FormGroup>
            <FormWrap>
              <FormLabel>User name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    placeholder="User name"
              
                    />      
            </FormWrap>
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
          <Button type="submit">Sign Up</Button>
        </Form>
 
        )
    }











