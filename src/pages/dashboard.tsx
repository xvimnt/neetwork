import { LayoutSigned } from "~/components/layouts/LayoutSigned";
import { DashboardCarrousel } from "~/components/template/DashboardCarrousel";

const items = [
  {
    authorName: "Ericka Godinez",
    authorTitle: "Software Developer",
    authorImageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    timeAgo: "2 semanas",
    title: "Curso de React.js",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fHww",
  },
  {
    authorName: "Ericka Godinez",
    authorTitle: "Software Developer",
    authorImageUrl:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
    timeAgo: "4 semanas",
    title: "Curso de Tailwind",
    imageUrl:
      "https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    authorName: "Ericka Godinez",
    authorTitle: "Software Developer",
    authorImageUrl:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    timeAgo: "3 semanas",
    title: "Curso de Shopify",
    imageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Dashboard() {
  return (
    <LayoutSigned>
      <DashboardCarrousel items={items} />
    </LayoutSigned>
  );
}
