import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow bg-[#25D366] hover:bg-[#1fa851] flex items-center justify-center p-0"
        asChild
      >
        <a
          href="https://wa.me/5583999060703"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
          className="flex items-center justify-center w-full h-full"
        >
          <img 
            src="/whatsapp-icon.png" 
            alt="WhatsApp" 
            className="h-8 w-8 object-contain"
          />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;