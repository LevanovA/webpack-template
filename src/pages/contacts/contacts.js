import './contacts.scss';
// import TabsFunc from "../../components/other/TabsFunc";
import TabsClass from "../../components/other/TabsClass";
// import DropDownBlock from "../../components/other/DropDownBlockFunc";
import DropdownBlockClass from "../../components/other/DropdownBlockClass";

const Contacts = () => {
    // TabsFunc();

    new TabsClass('.tabs');
    // DropDownBlock();
    new DropdownBlockClass('.dropdown-block')

}

Contacts();