import { NextPage } from "next";
import Title from "@components/Title";
import { SafeContentBackground, SafeContainer, SafeContent, SafeSidebar, SafeSidebarBackground } from "@components/layout/Safe";
import SideNavbar from "@components/SideNavbar";
import ManageAccount from "@components/ManageAccount";

const Settings: NextPage = () => (
    <>
        <Title title="Settings" />
        <SafeContainer>
            <SideNavbar />
            <SafeContentBackground>
                <SafeContent>
                    <ManageAccount />
                </SafeContent>
            </SafeContentBackground>
            <SafeSidebarBackground>
                <SafeSidebar>
                </SafeSidebar>
            </SafeSidebarBackground>
        </SafeContainer>
    </>
)


export default Settings;