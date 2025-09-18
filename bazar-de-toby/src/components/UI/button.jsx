export default function Button({as:As='button',className='',...props}){
const cls=`inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-colors ${className}`
return <As className={cls} {...props} />
}