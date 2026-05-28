import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["700"],
});

const customerStory = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A integração com as redes sociais também facilita muito o meu dia a dia.",
    author: {
      name: "Annette Bones",
      role: "CEO",
      avatar: "/avatar1.svg",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/avatar2.svg",
    },
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-heading-xl text-gray-100 `}
        >
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-32 md:grid-cols-2">
          {customerStory.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-gray-200 text-body-lg italic">
                {customerStory.content}
              </p>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={customerStory.author.avatar}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <p className="text-gray-200 text-sm">
                      {customerStory.author.name}
                    </p>
                    <p className="text-gray-300 text-xs">
                      {customerStory.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
