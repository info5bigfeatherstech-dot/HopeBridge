import { useState } from "react";
import { useHero } from "../../hooks/useHero";
import useUIStore from "../../store/useUIStore";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

/** Donation enquiry dialog; connects donors with staff without implying payment processing. */
export default function DonateModal() {
  const open = useUIStore((state) => state.isDonateModalOpen);
  const close = useUIStore((state) => state.closeDonateModal);
  const { data } = useHero();
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const copy = data?.donateModal;
  const submit = (event) => {
    event.preventDefault();
    close();
    setMessage(copy.success);
    event.currentTarget.reset();
    setAmount("");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={close}
        title={copy?.title ?? "Support HopeBridge"}
      >
        {copy && (
          <>
            <p className="text-base text-ink-muted capitalize">{copy.description}</p>
            <form onSubmit={submit} className="mt-6 space-y-5">
              <Input
                name="name"
                label={copy.name}
                autoComplete="name"
                required
              />
              <Input
                name="email"
                label={copy.email}
                type="email"
                autoComplete="email"
                required
              />
              <Select
                name="amount"
                label={copy.amount}
                options={copy.amountOptions}
                placeholder={copy.amountPlaceholder}
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
              />
              {amount === "custom" && (
                <Input
                  name="customAmount"
                  label={copy.amount}
                  type="number"
                  min="1"
                  inputMode="decimal"
                  required
                />
              )}
              <Button type="submit" size="lg" className="w-full">
                {copy.submit}
              </Button>
              <p className="text-sm text-ink-muted">{copy.privacy}</p>
            </form>
          </>
        )}
      </Modal>
      <Toast message={message} onClose={() => setMessage("")} />
    </>
  );
}
