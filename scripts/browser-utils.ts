const valRegexp:RegExp = /var\((.+)\)/g;
const variableNamePatternRegexp:RegExp = /^--[^-].+$/g;

const convertCSS4VarToValue = (css4Variable:string, domRef?:Element) => {
    // leave early if not in browser context
    if(typeof document === 'undefined') return css4Variable;

    // check if provided value is a css4 variable --<variable-name> OR val(--<variable-name>)
    const extractedVariableNameParameter = valRegexp.exec(css4Variable)?.[1] ?? null; // null if nothing found
    const isCSS4Variable:boolean = (!extractedVariableNameParameter)
        ? variableNamePatternRegexp.test(css4Variable)
        : variableNamePatternRegexp.test(extractedVariableNameParameter);
    const extractedVariable = (isCSS4Variable && !extractedVariableNameParameter)
        ? css4Variable
        : extractedVariableNameParameter;

    // leave early if not a css4 variable descriptor
    if(!isCSS4Variable) return css4Variable;

    // read variable value and return it
    const _domRef:Element = (domRef)
        ? domRef
        : document.documentElement;
        
    return getComputedStyle(_domRef).getPropertyValue(extractedVariable);
}

export {
    convertCSS4VarToValue
}