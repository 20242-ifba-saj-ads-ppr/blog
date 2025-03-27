public class ChronaltinaDate {
    private int hours;
    private int minutes;

    public ChronaltinaDate() {
    }

    public ChronaltinaDate(int hours, int minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }

    public int getTime() {
        return hours * 60 + minutes;
    }

    public void addHours(int hours) {

    }

    public void addMinutes(int minutes) {

    }
}
