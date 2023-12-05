import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsInComplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initials
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
