import EmailContainer from "../components/emailContainer";
import mail from "../assets/confirmEmail.png";

function ConfirmEmail() {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <EmailContainer
        image={mail}
        cta="Confirm Email"
        heading="Check your mailbox!"
        text="We've sent an email to seyi@zojatech.com with an otp to confirm your
            account. Check your inbox to activate your account."
        navigate="/Verify-otp"
        confirmEmail={true}
      />
    </div>
  );
}

export default ConfirmEmail;
