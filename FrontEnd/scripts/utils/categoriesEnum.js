/* Categories Enum Class */
export class Category {
    static All = new Category("All", 0);
    static Object = new Category("Object", 1);
    static Appartment = new Category("Appartment", 2);
    static Hostel = new Category("Hostel", 3);

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}