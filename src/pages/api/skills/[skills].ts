import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);

  const { skills, id } = req.query;

  if (skills === "category") {
    type Category = {
      id: number;
      value: string;
    };

    const data: Category[] = [
      {
        id: 0,
        value: "選択されていません",
      },
      { id: 1, value: "サーバーサイド" },
      { id: 2, value: "フロントエンド" },
      { id: 3, value: "インフラ" },
      { id: 4, value: "アプリ" },
    ];

    res.status(200).json(data);
  } else if (skills === "skill") {
    type Skill = {
      id: number;
      categoryId: number;
      value: string;
    };

    let skill: Skill[];

    switch (id) {
      case "1":
        skill = [
          { id: 101, categoryId: 1, value: "Ruby" },
          { id: 102, categoryId: 1, value: "PHP" },
          { id: 103, categoryId: 1, value: "Python" },
          { id: 104, categoryId: 1, value: "Go" },
          { id: 105, categoryId: 1, value: "Java" },
          { id: 121, categoryId: 1, value: "Ruby on Rails" },
          { id: 122, categoryId: 1, value: "Laravel" },
          { id: 123, categoryId: 1, value: "Symfony" },
          { id: 124, categoryId: 1, value: "Django" },
          { id: 125, categoryId: 1, value: "Flask" },
          { id: 126, categoryId: 1, value: "Gin" },
          { id: 127, categoryId: 1, value: "Revel" },
          { id: 128, categoryId: 1, value: "Spring Boot" },
        ];
        res.status(200).json(skill);
        break;

      case "2":
        skill = [
          { id: 201, categoryId: 2, value: "JavaScript" },
          { id: 202, categoryId: 2, value: "HTML" },
          { id: 203, categoryId: 2, value: "CSS" },
          { id: 221, categoryId: 2, value: "TypeScript" },
          { id: 222, categoryId: 2, value: "React" },
          { id: 223, categoryId: 2, value: "Vue.js" },
          { id: 224, categoryId: 2, value: "Svelte" },
          { id: 225, categoryId: 2, value: "Solid" },
          { id: 226, categoryId: 2, value: "Lit" },
          { id: 227, categoryId: 2, value: "Alpine.js" },
          { id: 228, categoryId: 2, value: "Preact" },
          { id: 229, categoryId: 2, value: "Stimulus" },
          { id: 230, categoryId: 2, value: "Angular" },
          { id: 231, categoryId: 2, value: "Ember" },
          { id: 232, categoryId: 2, value: "Next.js" },
          { id: 233, categoryId: 2, value: "Nuxt" },
        ];
        res.status(200).json(skill);
        break;

      case "3":
        skill = [
          { id: 301, categoryId: 3, value: "AWS" },
          { id: 302, categoryId: 3, value: "GCP" },
          { id: 303, categoryId: 3, value: "Azure" },
          { id: 304, categoryId: 3, value: "Firebase" },
          { id: 305, categoryId: 3, value: "Heroku" },
          { id: 306, categoryId: 3, value: "Docker" },
          { id: 307, categoryId: 3, value: "Kubernates" },
          { id: 308, categoryId: 3, value: "Terraform" },
          { id: 309, categoryId: 3, value: "Ansible" },
          { id: 310, categoryId: 3, value: "Chef" },
          { id: 311, categoryId: 3, value: "Datadog" },
          { id: 312, categoryId: 3, value: "Mackerel" },
          { id: 313, categoryId: 3, value: "Prometheus" },
          { id: 314, categoryId: 3, value: "Zabbbix" },
          { id: 315, categoryId: 3, value: "Sentry" },
          { id: 316, categoryId: 3, value: "GitHub" },
          { id: 317, categoryId: 3, value: "GitHub Actions" },
          { id: 318, categoryId: 3, value: "CircleCI" },
          { id: 319, categoryId: 3, value: "Jenkins" },
        ];
        res.status(200).json(skill);
        break;

      case "4":
        skill = [
          { id: 401, categoryId: 4, value: "Objective-C" },
          { id: 402, categoryId: 4, value: "Swift" },
          { id: 403, categoryId: 4, value: "AndroidJava" },
          { id: 404, categoryId: 4, value: "Kotlin" },
          { id: 411, categoryId: 4, value: "Xamarin" },
          { id: 412, categoryId: 4, value: "Cordova" },
          { id: 413, categoryId: 4, value: "React Native" },
          { id: 414, categoryId: 4, value: "Flutter" },
        ];
        res.status(200).json(skill);
        break;

      default:
        res.status(200).json("");
        break;
    }

    res.status(404).end();
  }
}
