import React from 'react'

interface ToggleProps {
  hideOdd: boolean;
  onChange: () => void;
}

export default function Toggle(props: ToggleProps) {
  const { hideOdd, onChange } = props;

  return (
    <div>
      Hide odd toggle
      <input type="checkbox" checked={hideOdd} onChange={onChange} />
    </div>
  )
}
