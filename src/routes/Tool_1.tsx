import './Tool_1.css'
import Lines from '../components/Lines'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState, useEffect } from 'react'

interface ITheme { [key: string]: string; }
interface IProps extends React.HTMLAttributes<HTMLElement> {
    json?: any;
    data?: any;
    replacer?: (key: string, value: any) => any | null;
    space?: number | string;
    themeClassName?: string;
    theme?: ITheme;
    silent?: boolean;
    onJSONPrettyError?: (e: Error) => void;
    mainStyle?: string
    keyStyle?: string
    stringStyle?: string
    valueStyle?: string
    booleanStyle?: string
    errorStyle?: string
}

function getStyleValue(name: string, theme: ITheme, styles: any): string {
    const extra = styles[name + 'Style'] || ''
    const style = theme ? theme[name] || '' : ''
    return extra ? `${extra};${style}` : style
}

function getStyle(name: string, theme: ITheme, styles: any): string {
    const value = getStyleValue(name, theme, styles)
    return value ? ` style="${value}"` : ''
}

const xssmap: { [key: string]: string } = {
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt',
};

function xss(s: string): string {
    if (!s) {
        return s
    }

    return s.replace(/<|>|&|"|'/g, (m) => {
        return xssmap[m]
    });
}

class JSONPretty extends React.Component<IProps, {}> {
    public static propTypes = {
        data: PropTypes.any,
        json: PropTypes.any,
        replacer: PropTypes.func,
        silent: PropTypes.bool,
        space: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        theme: PropTypes.object,
        themeClassName: PropTypes.string,
        onJSONPrettyError: PropTypes.func
    };

    public static defaultProps = {
        data: '',
        json: '',
        silent: true,
        space: 2,
        themeClassName: '__json-pretty__',
    };

    public render() {
        const {
            json, data, replacer, space, themeClassName, theme, onJSONPrettyError, onError, silent,
            mainStyle,
            keyStyle,
            valueStyle,
            stringStyle,
            booleanStyle,
            errorStyle,
            ...rest
        } = this.props

        const styles = {
            mainStyle,
            keyStyle,
            valueStyle,
            stringStyle,
            booleanStyle,
            errorStyle
        };

        let obj = data || json;
        if (typeof obj === 'string') {
            try {
                obj = JSON.parse(obj);
            } catch (e) {
                if (!silent) {
                    console.warn(`[react-json-pretty]: ${e.message}`);
                }

                if (onJSONPrettyError) {
                    onJSONPrettyError(e);
                }

                if (!onJSONPrettyError && onError) {
                    onError(e);
                    console.warn('JSONPretty#onError is deprecated, please use JSONPretty#onJSONPrettyError instead');
                }

                return (
                    <div {...rest} dangerouslySetInnerHTML={
                        {
                            __html:
                                `<pre class="__json-pretty-error__"${getStyle('error', theme, styles)}>${xss(obj)}</pre>`
                        }
                    }>
                    </div>
                );
            }
        }

        return (
            <div {...rest} dangerouslySetInnerHTML={
                {
                    __html:
                        `<pre class="${themeClassName}"${getStyle('main', theme, styles)}>${this._pretty(theme, obj, replacer, +space, styles)
                        }</pre>`
                }
            }>
            </div>
        );
    }

    // JSON to Html
    private _pretty(theme: ITheme, obj: any, replacer: (k: string, v: any) => any, space: number, styles: any) {
        // match line by line&enumerate：“key”: "value" | "key": value | "key": [ | "key": { | "key": [],| "Key": {},
        const regLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/mg;
        const text = JSON.stringify(obj, typeof replacer === 'function' ? replacer : null, isNaN(space) ? 2 : space);

        /* istanbul ignore next */
        if (!text) {
            return text;
        }

        return text.replace(/&/g, '&amp;').replace(/\\"([^,])/g, '\\&quot;$1')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(regLine, this._replace.bind(null, theme, styles));
    }
    // Formatting Function
    private _replace(theme: ITheme, styles: any, match: any, ind: string, key: string, val: string, tra: string) {
        const spanEnd = '</span>';
        const keySpan = `<span class="__json-key__"${getStyle('key', theme, styles)}>`;
        const valSpan = `<span class="__json-value__"${getStyle('value', theme, styles)}>`;
        const strSpan = `<span class="__json-string__"${getStyle('string', theme, styles)}>`;
        const booSpan = `<span class="__json-boolean__"${getStyle('boolean', theme, styles)}>`;

        let sps = ind || '';
        if (key) {
            sps = sps + '"' + keySpan + key.replace(/^"|":\s$/g, '') + spanEnd + '": ';
        }

        if (val) {
            if (val === 'true' || val === 'false') {
                sps = sps + booSpan + val + spanEnd;
            } else {
                sps = sps + (val[0] === '"' ? strSpan : valSpan) + val + spanEnd;
            }
        }

        return sps + (tra || '');
    }
}

function useWindowSize() {
    const [Size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return Size;
}

export default function Tool_2() {
    // Function for I/O
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function parse(val) {
        setData(val.target.value)
        setPrint(false)
    }
    // End of function
    const [height, width] = useWindowSize();
    if (width <= 964) {
        return (
            <>
                <div className="mobile-message flex flex-column">
                    <h2>Sorry, this app is not supported on Mobile Devices</h2>
                    <p>To use this app, please use a computer or Tablet</p>
                </div>
            </>
        )
    }
    else{
    return (
        <>
            <Navbar />
            <Lines />
            <br />
            <h3>Enter Some JSON: </h3>
            <br />
            <textarea id="textarea" onChange={parse} />
            <br />
            <button onClick={() => setPrint(true)}>Pretty Print</button>
            <br />
            { /*Printing function */
                print ?
                    <>
                        <h3>Prettyfied data: </h3>
                        <JSONPretty id="json-pretty" data={data}></JSONPretty>
                    </>
                    : null
            }
            <br />
            <Lines />
            <Footer />
        </>
    )
    }
}
