import FrequentlyAskedQuestions from "../buttons/FrequentlyAskedQuestions";

function FAQ() {
  return (
    <div className="p-[16px] lg:w-[1100px] lg:mt-[32px]" id="faq">
      <p className="text-center">Frequently asked questions?</p>
      <p className="text-center font-bold text-[5vw] lg:text-[2.5vw]">
        We can help!
      </p>

      <div className="lg:flex lg:justify-between lg:mt-[32px]">
        <div className="lg:w-[48%]">
          <FrequentlyAskedQuestions questions="What is Zojapay" />
          <FrequentlyAskedQuestions questions="What do I need to open account with ZojaPay?" />
          <FrequentlyAskedQuestions questions="How does ZojaPay work?" />
        </div>

        <div className="lg:w-[48%]">
          <FrequentlyAskedQuestions questions="Can i make money on ZojaPay?" />
          <FrequentlyAskedQuestions questions="Is the app available for download" />
          <FrequentlyAskedQuestions questions="What other Features does Zojapay offer?" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
