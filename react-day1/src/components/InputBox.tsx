type Props = {
    value: string;
    //typescript input에서 발생한 change event
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

export default function InputBox({ value, onChange }: Props ){
    return(
        <div>
            <input type="text" value={value} onChange={onChange} placeholder="이름을 입력하세요"/>
        </div>
    )
}