public class Cliente {
    public static void main(String[] args) {
        ChronaltinaDate date = getChronology();
        date.addHours(2);
        date.addMinutes(20);
    }

    private static ChronaltinaDate getChronology() {
        // return new ChronaltinaDateLeo(1,1);
        return new ChronaltinaPlusDateAdapter(new ChronaltinaPlusDate());
    }
}
