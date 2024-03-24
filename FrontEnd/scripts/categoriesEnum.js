/* Categories Enum Class */
export class Category {
    static All = new Category("All");
    static Object = new Category("Object");
    static Appartment = new Category("Appartment");
    static Hostel = new Category("Hostel");

    constructor(name) {
        this.name = name;
    }
}