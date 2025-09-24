import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="rounded-full shadow-lg hover:shadow-xl transition-all bg-[#25D366] hover:bg-[#1fa851] flex items-center gap-2 px-4 py-3 h-auto min-h-[56px]"
        asChild
      >
        <a
          href="https://wa.me/5583999060703"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
          className="flex items-center gap-2 text-white font-medium"
        >
          <img 
            src="/whatsapp-icon.png" 
            alt="WhatsApp" 
            className="h-6 w-6 object-contain"
          />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;