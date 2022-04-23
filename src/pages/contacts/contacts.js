import './contacts.scss';
// import TabsFunc from "../../components/other/TabsFunc";
import TabsClass from "../../components/other/TabsClass";
// import DropDownBlock from "../../components/other/DropDownBlockFunc";
import DropdownBlockClass from "../../components/other/DropdownBlockClass";

const Contacts = () => {
    // TabsFunc();

    const tabs = document.querySelectorAll('.tabs');

    for (let i = 0; i < tabs.length; i++) {
        new TabsClass(tabs[i]);
    }
    // new TabsClass('.tabs');
    // DropDownBlock();
    new DropdownBlockClass('.dropdown-block');

}

Contacts();