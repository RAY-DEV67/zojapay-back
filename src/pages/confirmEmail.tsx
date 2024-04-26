import EmailContainer from "../components/emailContainer";

function ConfirmEmail() {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <EmailContainer
        cta="Confirm Email"
        heading="Check your mailbox!"
        text="We've sent an email to seyi@zojatech.com with an otp to confirm your
            account. Check your inbox to activate your account."
        navigate="/Email Verified"
        confirmEmail={true}
      />
    </div>
  );
}

export default ConfirmEmail;
