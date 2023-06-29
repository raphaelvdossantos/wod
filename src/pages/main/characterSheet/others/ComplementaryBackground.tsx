import TextArea from 'components/textArea/TextArea';

function ComplementaryBackground(props: any) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <label htmlFor='CHRONICLE TENETS'>
        Chronicle Tenets
        <TextArea id='CHRONICLE_TENETS' />
      </label>
      <label htmlFor='TOUCHSTONES_CONVICTIONS'>
        Touchstones & Convictions
        <TextArea id='TOUCHSTONES_CONVICTIONS' />
      </label>
      <label htmlFor='CLAN_BANE'>
        Clan Bane
        <TextArea id='CLAN_BANE' />
      </label>
    </div>
  );
}

export default ComplementaryBackground;
