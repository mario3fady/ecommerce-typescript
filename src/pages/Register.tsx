import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
            />
            <Input
              label="Email Address"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
