import TextArea from 'components/textArea/TextArea';

function ComplementaryBackground(props: any) {
  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent:"space-between" }}>
      <label htmlFor='CHRONICLE TENETS'>
        Chronicle Tenets
        <TextArea id='CHRONICLE_TENETS' width="100%"/>
      </label>
      <label htmlFor='TOUCHSTONES_CONVICTIONS'>
        Touchstones & Convictions
        <TextArea id='TOUCHSTONES_CONVICTIONS'  width="100%"/>
      </label>
      <label htmlFor='CLAN_BANE'>
        Clan Bane
        <TextArea id='CLAN_BANE'  width="100%"/>
      </label>
    </div>
  );
}

export default ComplementaryBackground;
