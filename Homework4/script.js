
const yearBirth = +prompt("What is your year of birth?");
const age = 2023-yearBirth;
const cityLive = prompt("Where do you live?");
const favouriteSport = prompt("What's your favourite sport?");
const kyiv = "Київ";
const london = "Лондон";
const washington = "Вашингтон";
const volleyball = "Волейбол";
const basketball = "Баскетбол";
const football = "Футбол";

if (!yearBirth) {
    switch (cityLive) {
        case kyiv:
        case london:
        case washington:
            switch (favouriteSport) {
                case volleyball:
                    alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Дмитро Вієцький?`);
                    break;
                case basketball:
                    alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Дмитро Кривенко?`);
                    break;
                case football:
                    alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Андрій Шевченко?`);
                    break;
                default:
                    alert(`Шкода що ви не захотіли ввести свою дату народження і улюблений спорт. Ти живеш у столиці ${cityLive}`);
            }
            break;
        default:
            if (cityLive) {
                switch (favouriteSport) {
                    case volleyball:
                        alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у місті ${cityLive} Круто! Хочеш стати як Дмитро Вієцький?`);
                        break;
                    case basketball:
                        alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у місті ${cityLive} Круто! Хочеш стати як Дмитро Кривенко?`);
                        break;
                    case football:
                        alert(`Шкода що ви не захотіли ввести свою дату народження. Ти живеш у місті ${cityLive} Круто! Хочеш стати як Андрій Шевченко?`);
                        break;
                    default:
                        alert(`Шкода що ви не захотіли ввести свою дату народження і улюблений спорт. Ти живеш у місті ${cityLive}`);
                }
            }
            else if (!cityLive)
            {
                switch (favouriteSport)
                {
                    case volleyball:
                        alert(`Шкода що ви не захотіли ввести своє місто і дату народження. Круто! Хочеш стати як Дмитро Вієцький?`);
                        break;
                    case basketball:
                        alert(`Шкода що ви не захотіли ввести своє місто і дату народження. Круто! Хочеш стати як Дмитро Кривенко?`);
                        break;
                    case football:
                        alert(`Шкода що ви не захотіли ввести своє місто і дату народження. Круто! Хочеш стати як Андрій Шевченко?`);
                        break;
                    default:
                        alert("Шкода що ви не захотіли ввести свою дату народження, ваше місто і улюблений спорт.");

                }
            }
    }
}
else if (yearBirth)
{
    switch (cityLive)
    {
        case kyiv:
        case london:
        case washington:
            switch (favouriteSport)
            {
                case volleyball:
                    alert(`Ваш вік ${age}. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Дмитро Вієцький?`);
                    break;
                case basketball:
                    alert(`Ваш вік ${age}. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Дмитро Кривенко?`);
                    break;
                case football:
                    alert(`Ваш вік ${age}. Ти живеш у столиці ${cityLive}. Круто! Хочеш стати як Андрій Шевченко?`);
                    break;
                default:
                    alert(`Шкода що ви не захотіли ввести свій улюблений спорт. Ваш вік ${age}. Ти живеш у столиці ${cityLive}`);
            }
            break;
        default:
            if (cityLive) {
                switch (favouriteSport) {
                    case volleyball:
                        alert(`Ваш вік ${age}. Ти живеш у місті ${cityLive}. Круто! Хочеш стати як Дмитро Вієцький?`);
                        break;
                    case basketball:
                        alert(`Ваш вік ${age}. Ти живеш у місті ${cityLive}. Круто! Хочеш стати як Дмитро Кривенко?`);
                        break;
                    case football:
                        alert(`Ваш вік ${age}. Ти живеш у місті ${cityLive}. Круто! Хочеш стати як Андрій Шевченко?`);
                        break;
                    default:
                        alert(`Шкода що ви не захотіли ввести свій улюблений спорт. Ваш вік ${age}. Ти живеш у місті ${cityLive}.`);
                }
            }
            else
            {
                switch (favouriteSport) {
                    case volleyball:
                        alert(`Шкода що ви не захотіли ввести ваше місто. Ваш вік ${age}. Круто! Хочеш стати як Дмитро Вієцький?`);
                        break;
                    case basketball:
                        alert(`Шкода що ви не захотіли ввести ваше місто. Ваш вік ${age}. Круто! Хочеш стати як Дмитро Кривенко?`);
                        break;
                    case football:
                        alert(`Шкода що ви не захотіли ввести ваше місто.Ваш вік ${age}. Круто! Хочеш стати як Андрій Шевченко?`);
                        break;
                    default:
                        alert(`Шкода що ви не захотіли ввести свій улюблений спорт і місто. Ваш вік ${age}.`);
                }
            }
    }
}

