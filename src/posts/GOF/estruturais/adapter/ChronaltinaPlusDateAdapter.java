public class ChronaltinaPlusDateAdapter extends ChronaltinaDate {
    private ChronaltinaPlusDate chronaltinaPlusDate;

    public ChronaltinaPlusDateAdapter(ChronaltinaPlusDate chronaltinaPlusDate) {
        this.chronaltinaPlusDate = chronaltinaPlusDate;
    }

    public void addHours(int hours) {
        chronaltinaPlusDate.addTimeWithTimeZone(hours, 0, "");
    }

    public void addMinutes(int minutes) {
        chronaltinaPlusDate.addTimeWithTimeZone(0, minutes, "");
    }

}
