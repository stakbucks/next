"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  const handleClick = () => {
    reset();
  };
  return (
    <div>
      <h1>무언가가 잘못됐습니다!</h1>
      <button onClick={handleClick}>다시하기</button>
    </div>
  );
}
