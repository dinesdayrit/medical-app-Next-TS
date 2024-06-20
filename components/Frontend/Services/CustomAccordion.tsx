import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import { FAQArray } from "@/types/type";
  
  const faqs: FAQArray = [
    {
      qn: "How do I sign up for the Medical App??",
      ans: `You can sign up by visiting our website and clicking on the <a href="/register" class="text-blue-600 hover:underline text-bold">Signup</a>. Follow the instructions to create your account.`
    },
    {
      qn: "Can I use the Medical App on multiple devices??",
      ans: "Yes, you can access our app from any device with an internet connection. Simply log in using your credentials."
    },
    {
      qn: "Is my data secure on the Medical App??",
      ans: "Absolutely. We prioritize the security and privacy of your data. Our platform employs industry-standard encryption and security protocols to safeguard your information."
    },
    {
      qn: "Do you offer customer support??",
      ans: "Yes, we have a dedicated customer support team available to assist you with any questions or issues you may encounter. You can reach out to us via email or through our support portal."
    },
  ];
  
  export default function CustomAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.qn}</AccordionTrigger>
            <AccordionContent>
              {/<\/?[a-z][\s\S]*>/i.test(faq.ans) ? (
                <div dangerouslySetInnerHTML={{ __html: faq.ans }} />
              ) : (
                faq.ans
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  