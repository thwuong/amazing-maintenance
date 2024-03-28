import Container from "@/components/container/Container";
import Heading from "@/components/text/Heading";
import Paragraph from "@/components/text/Paragraph";
import Title from "@/components/text/Title";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Container className="h-screen flex flex-col justify-center max-md:h-dvh gap-10 max-w-[1440px] mx-auto">
                <Image src={"/assets/logo.png"} alt="logo" width={96} height={96} />
                <section className="flex items-center  max-md:flex-col max-md:gap-10">
                    <div className="flex gap-2 flex-col max-w-[600px]">
                        <Title className="text-[3rem] text-primary-1 font-semibold max-md:text-[2.5rem]">
                            Thông Báo Bảo Trì Hệ Thống!
                        </Title>
                        <Heading headingLevel={"h2"} className="text-[1.5rem] font-medium">
                            {"Tạm ngừng dịch vụ để nâng cấp"}
                        </Heading>
                        <Paragraph className="flex-1">
                            Chúng tôi sẽ tiến hành bảo trì nâng cấp hệ thống. Trong thời gian này, tất cả dịch vụ sẽ tạm
                            thời không khả dụng. Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào và cảm ơn sự kiên nhẫn của
                            bạn.
                        </Paragraph>
                    </div>
                    <div className="">
                        <Image src={"/assets/maintenance.png"} alt="maintenance" width={700} height={400} />
                    </div>
                </section>
            </Container>
        </main>
    );
}
