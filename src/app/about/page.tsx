import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-primary mb-8">
        关于
      </h1>
      <div className="prose">
        <p>
          欢迎来到 AI Blog，这是一个关于人工智能、编程技术和生活思考的个人博客。
        </p>
        <p>
          在这里，我会分享我在技术领域的探索与发现，记录学习过程中的思考与感悟。
          无论是前沿的 AI 技术，还是日常编程中的小技巧，都希望能给你带来一些启发。
        </p>
        <h2>关于我</h2>
        <p>
          我是一名热爱技术的开发者，专注于 Web 开发和人工智能领域。
          我相信技术的力量可以改变世界，也相信文字的力量可以传递思想。
        </p>
        <h2>联系方式</h2>
        <p>
          如果你有任何问题或建议，欢迎通过 GitHub 与我联系。
        </p>
      </div>
    </div>
  );
}