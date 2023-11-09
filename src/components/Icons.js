export const InstagramIcon = ({className, ...rest}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="2em"
            height="2em"
            viewBox="-19.504 -32.497 169.031 194.983"
            className={` w-full h-auto ${className}`}
            {...rest}
        >
            <defs>
                <radialGradient
                    xlinkHref="#a"
                    id="c"
                    cx={158.429}
                    cy={578.088}
                    r={65}
                    fx={158.429}
                    fy={578.088}
                    gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)"
                    gradientUnits="userSpaceOnUse"
                />
                <radialGradient
                    xlinkHref="#b"
                    id="d"
                    cx={147.694}
                    cy={473.455}
                    r={65}
                    fx={147.694}
                    fy={473.455}
                    gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)"
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient id="b">
                    <stop offset={0} stopColor="#3771c8" />
                    <stop offset={0.128} stopColor="#3771c8" />
                    <stop offset={1} stopColor="#60f" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="a">
                    <stop offset={0} stopColor="#fd5" />
                    <stop offset={0.1} stopColor="#fd5" />
                    <stop offset={0.5} stopColor="#ff543e" />
                    <stop offset={1} stopColor="#c837ab" />
                </linearGradient>
            </defs>
            <path
                fill="url(#c)"
                d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
            />
            <path
                fill="url(#d)"
                d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
            />
            <path
                fill="#fff"
                d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 1 0 5.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
            />
        </svg>
    );
};

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);

export const CircularText = ({ className, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={496}
        height={496}
        viewBox="0 0 810 810"
        xmlSpace="preserve"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="m380.17 716.548-25.407-4.218c-6.07-1-11.242-3.047-15.516-6.141-4.28-3.086-7.363-6.945-9.25-11.578-1.882-4.637-2.363-9.746-1.437-15.328.918-5.594 3.016-10.281 6.297-14.063 3.281-3.781 7.449-6.441 12.5-7.984 5.043-1.55 10.601-1.828 16.672-.828l25.406 4.219Zm-17.282-49.406c-5.582-.93-10.297-.11-14.14 2.453-3.852 2.57-6.22 6.52-7.094 11.844-.883 5.32.086 9.816 2.906 13.484 2.812 3.664 7.012 5.961 12.594 6.891l11.828 1.953 5.734-34.672ZM282.83 654.105c.063-.157.556-1.184 1.47-3.079l30.718 11.954c.43-2.743-.101-5.243-1.593-7.5-1.5-2.262-3.785-3.989-6.86-5.188-2.101-.812-4.093-1.223-5.968-1.234-1.883-.008-3.797.39-5.735 1.203l-3.625-9.235c5.524-2.882 11.961-2.894 19.313-.03 4.574 1.78 8.273 4.25 11.093 7.405 2.825 3.157 4.579 6.688 5.266 10.594.68 3.914.234 7.883-1.328 11.906-1.55 3.977-3.89 7.196-7.016 9.657-3.133 2.457-6.695 3.937-10.687 4.437-3.988.508-8.016-.027-12.078-1.61-3.989-1.554-7.254-3.812-9.797-6.78-2.551-2.961-4.13-6.399-4.735-10.313-.601-3.906-.082-7.969 1.563-12.187Zm16.345 20.328c2.668 1.039 5.203 1.156 7.61.343 2.397-.804 4.304-2.421 5.718-4.859l-20.016-7.797c-.582 2.727-.265 5.207.953 7.438 1.211 2.238 3.121 3.863 5.735 4.875Zm-12.5 23.203-12.688-4.922 17.875-5.547 9.219 3.578ZM228.224 646.873l38.329-27.688 11.14 6.766-6.969 46.719-11.14-6.766 5.078-31.578-26.047 18.86ZM204.575 597.25c.118-.125.93-.922 2.438-2.39l24.765 21.734c1.344-2.418 1.7-4.942 1.063-7.579-.633-2.632-2.188-5.039-4.656-7.218-1.707-1.489-3.442-2.555-5.203-3.203-1.758-.657-3.692-.938-5.797-.844l-.25-9.922c6.18-.813 12.23 1.383 18.156 6.578 3.7 3.25 6.336 6.844 7.906 10.781 1.574 3.93 2.012 7.844 1.313 11.75-.696 3.914-2.469 7.493-5.313 10.735-2.82 3.207-6.125 5.43-9.906 6.672-3.781 1.238-7.629 1.41-11.547.515-3.926-.898-7.523-2.781-10.797-5.656-3.219-2.824-5.52-6.063-6.906-9.719-1.383-3.656-1.688-7.422-.906-11.297.773-3.882 2.652-7.53 5.64-10.937Zm8.391 24.703c2.156 1.883 4.5 2.86 7.031 2.922 2.524.062 4.875-.813 7.063-2.625l-16.14-14.156c-1.49 2.355-2.048 4.789-1.673 7.296.375 2.52 1.617 4.707 3.719 6.563ZM171.148 616.53l-8.328-9.516 45.25-39.547 8.328 9.516ZM191.692 544.164c2.523 3.843 3.984 7.812 4.39 11.906.406 4.094-.242 7.934-1.953 11.516-1.707 3.582-4.363 6.562-7.969 8.937-3.613 2.375-7.406 3.64-11.375 3.797-3.968.156-7.754-.758-11.359-2.734-3.602-1.98-6.664-4.891-9.188-8.735-2.53-3.832-3.988-7.785-4.375-11.86-.382-4.081.278-7.913 1.985-11.5 1.71-3.581 4.37-6.562 7.984-8.937 3.606-2.375 7.39-3.64 11.36-3.797 3.968-.156 7.746.75 11.328 2.72 3.586 1.96 6.64 4.855 9.172 8.687Zm-8.641 5.703c-1.781-2.696-4.156-4.313-7.125-4.844-2.977-.539-6 .2-9.063 2.219-3.07 2.023-4.945 4.5-5.625 7.437-.675 2.938-.125 5.758 1.657 8.453 1.781 2.711 4.164 4.336 7.14 4.891 2.98.563 6.008-.168 9.078-2.187 3.063-2.02 4.934-4.508 5.61-7.47.668-2.956.11-5.788-1.672-8.5ZM126.074 514.935c-1.54-3.75-2.082-7.516-1.625-11.297.45-3.781 1.875-7.188 4.281-10.219 2.399-3.031 5.664-5.398 9.797-7.11 4.148-1.706 8.14-2.331 11.984-1.874 3.836.46 7.246 1.867 10.235 4.219 2.992 2.355 5.258 5.406 6.797 9.156 2.117 5.137 2.164 9.844.14 14.125l18.797-7.766 4.828 11.688-54.797 22.625-4.609-11.14 4.64-1.923c-4.695-1.457-8.187-4.953-10.468-10.484Zm32.719-11.156c-1.227-2.989-3.25-5.024-6.063-6.11-2.812-1.082-5.914-.926-9.312.469-3.395 1.398-5.703 3.477-6.922 6.234-1.227 2.75-1.227 5.621 0 8.61 1.242 3 3.265 5.047 6.078 6.14 2.805 1.086 5.902.93 9.297-.468 3.398-1.395 5.71-3.473 6.937-6.235 1.23-2.758 1.227-5.64-.015-8.64ZM109.78 458.486c-.79-3.97-.595-7.758.593-11.375 1.18-3.625 3.242-6.688 6.187-9.188 2.95-2.508 6.621-4.195 11.016-5.062 4.387-.875 8.418-.711 12.094.484 3.68 1.187 6.75 3.234 9.219 6.14 2.468 2.899 4.101 6.329 4.89 10.297 1.074 5.45.211 10.079-2.594 13.891l19.938-3.937 2.453 12.39-58.156 11.5-2.344-11.828 4.922-.969c-4.32-2.343-7.063-6.457-8.219-12.343Zm34.265-4.532c-.633-3.175-2.223-5.57-4.766-7.187-2.55-1.625-5.625-2.078-9.219-1.36-3.613.711-6.289 2.297-8.03 4.766-1.74 2.469-2.29 5.293-1.657 8.469.625 3.18 2.215 5.574 4.766 7.187 2.542 1.606 5.62 2.055 9.234 1.344 3.594-.719 6.262-2.305 8-4.766 1.742-2.457 2.297-5.273 1.672-8.453ZM127.188 382.992c.168 0 1.305.074 3.407.219l.25 32.953c2.699-.613 4.824-2.031 6.375-4.25 1.554-2.226 2.312-4.988 2.28-8.281-.007-2.258-.359-4.266-1.046-6.016-.695-1.75-1.781-3.375-3.25-4.875l7.234-6.797c4.719 4.075 7.11 10.055 7.172 17.938.04 4.918-.879 9.273-2.765 13.062-1.883 3.793-4.52 6.73-7.907 8.813-3.383 2.074-7.234 3.125-11.547 3.156-4.27.031-8.125-.953-11.562-2.953-3.445-2-6.145-4.758-8.094-8.281-1.945-3.52-2.937-7.461-2.969-11.828-.03-4.27.86-8.141 2.672-11.61 1.813-3.468 4.43-6.203 7.844-8.203 3.406-2 7.375-3.015 11.906-3.047Zm-12.86 22.688c.024 2.867.852 5.265 2.485 7.203 1.637 1.93 3.856 3.101 6.657 3.516l-.157-21.47c-2.75.462-4.937 1.669-6.562 3.626-1.633 1.949-2.442 4.324-2.422 7.125ZM114.143 328.798l42.859 7.781-2.14 11.797-5.11-.922a16.45 16.45 0 0 1 3.187 6.656c.57 2.461.618 5.016.141 7.672-1.031 5.637-3.465 9.809-7.297 12.516-3.832 2.71-8.937 3.484-15.312 2.328l-24.203-4.406 2.25-12.422 22.375 4.062c6.918 1.262 10.902-1.004 11.953-6.797.543-2.976.007-5.547-1.61-7.703-1.613-2.164-4.332-3.597-8.156-4.297l-21.187-3.843ZM127.956 305.933c-1.488-2.132-2.316-4.586-2.484-7.359-.164-2.781.304-5.75 1.406-8.906l11 3.875c-.55 1.281-.91 2.152-1.078 2.61-1.195 3.405-1.18 6.417.047 9.03 1.23 2.606 3.758 4.579 7.578 5.922l19.39 6.828-4.187 11.922-41.094-14.453 4-11.375ZM181.725 200.569l26.547 37.969-7 9.953-27.766-7.563 16.313 23.844-6.985 9.938-44.672-12.204 6.844-9.734 30.016 8.531-17.953-25.687 6.156-8.75 30.062 8.469-18-25.625ZM235.78 182.54c.101.126.8 1.028 2.093 2.704l-24.437 22.11c2.25 1.593 4.719 2.234 7.406 1.921 2.696-.32 5.27-1.586 7.719-3.797 1.676-1.508 2.937-3.101 3.781-4.781.844-1.688 1.332-3.578 1.469-5.672l9.906.906c.094 6.22-2.789 11.977-8.64 17.266-3.649 3.293-7.512 5.496-11.594 6.61-4.086 1.105-8.028 1.09-11.828-.048-3.801-1.144-7.149-3.316-10.047-6.515-2.863-3.164-4.692-6.695-5.485-10.594-.789-3.906-.52-7.754.813-11.547 1.336-3.8 3.621-7.164 6.86-10.094 3.167-2.863 6.652-4.77 10.452-5.718 3.79-.946 7.567-.813 11.329.406 3.757 1.21 7.16 3.492 10.203 6.844Zm-25.5 5.5c-2.125 1.93-3.364 4.15-3.72 6.657-.35 2.5.247 4.934 1.798 7.297l15.922-14.39c-2.168-1.75-4.528-2.583-7.078-2.5-2.543.085-4.848 1.062-6.922 2.937ZM251.761 145.674c3.457-2.114 7.086-3.239 10.89-3.375 3.802-.145 7.384.734 10.75 2.64 3.364 1.907 6.212 4.774 8.548 8.594 2.332 3.824 3.57 7.668 3.718 11.531.145 3.856-.714 7.446-2.578 10.766-1.867 3.312-4.527 6.027-7.984 8.14-5.117 3.118-9.992 3.883-14.625 2.297l2.61 4.282-10.313 6.28-31.282-51.312 10.797-6.578 11 18.047c.899-4.656 3.72-8.426 8.47-11.312Zm16.078 30.593c2.77-1.687 4.473-4.004 5.11-6.953.632-2.957-.008-6-1.922-9.125-1.907-3.144-4.32-5.101-7.235-5.875-2.906-.781-5.746-.328-8.515 1.36-2.774 1.687-4.477 4-5.11 6.937-.625 2.938.016 5.98 1.922 9.125 1.914 3.125 4.328 5.086 7.235 5.875 2.906.793 5.742.344 8.515-1.344ZM306.304 137.479l21.781-7.094 3.125 9.64-21.78 7.094ZM358.9 93.46l25.703-1.579c6.144-.383 11.644.45 16.5 2.5 4.863 2.055 8.734 5.133 11.61 9.234 2.874 4.094 4.487 8.965 4.843 14.61.351 5.656-.649 10.7-3 15.125-2.356 4.418-5.82 7.945-10.39 10.578-4.563 2.637-9.919 4.148-16.063 4.531l-25.703 1.578Zm27.89 44.28c5.657-.343 10.07-2.195 13.25-5.562 3.176-3.363 4.598-7.738 4.266-13.125-.336-5.383-2.281-9.547-5.844-12.484-3.562-2.946-8.172-4.25-13.828-3.907l-11.953.75 2.156 35.078ZM467.737 132.527c-.024.156-.266 1.265-.735 3.328l-32.594-4.766c.188 2.762 1.266 5.074 3.235 6.938 1.969 1.867 4.578 3.039 7.828 3.515 2.238.336 4.27.293 6.094-.125 1.832-.414 3.61-1.238 5.328-2.469l5.594 8.204c-4.73 4.05-10.996 5.504-18.797 4.359-4.875-.711-9.043-2.29-12.5-4.734-3.461-2.446-5.961-5.5-7.5-9.157-1.532-3.664-1.985-7.629-1.36-11.89.614-4.227 2.172-7.89 4.672-10.985 2.5-3.101 5.633-5.347 9.406-6.734 3.782-1.383 7.833-1.758 12.157-1.125 4.218.617 7.898 2.086 11.047 4.406 3.156 2.313 5.46 5.309 6.921 8.985 1.458 3.68 1.86 7.761 1.204 12.25Zm-20.454-16.172c-2.843-.414-5.343.039-7.5 1.36-2.156 1.323-3.652 3.339-4.484 6.046l21.234 3.11c-.03-2.782-.89-5.126-2.578-7.032-1.68-1.914-3.902-3.078-6.672-3.484Zm6.97-25.407 13.468 1.97-16.188 9.405-9.78-1.421ZM522.6 127.324l-31.156 35.578-12.36-4.094-3.687-47.11 12.375 4.095 2.14 31.937 21.141-24.219ZM556.75 170.398c-.086.144-.7 1.101-1.844 2.875l-29-15.625c-.762 2.656-.543 5.203.656 7.64 1.207 2.426 3.258 4.415 6.157 5.97 1.988 1.07 3.914 1.722 5.78 1.952 1.876.239 3.829.078 5.86-.484l2.453 9.625c-5.836 2.176-12.218 1.394-19.156-2.344-4.336-2.336-7.71-5.242-10.125-8.719-2.418-3.48-3.726-7.203-3.922-11.171-.187-3.97.739-7.848 2.781-11.641 2.032-3.758 4.75-6.664 8.157-8.719 3.414-2.062 7.133-3.097 11.156-3.11 4.02-.007 7.953 1.024 11.797 3.095 3.758 2.03 6.723 4.671 8.89 7.921 2.165 3.25 3.301 6.856 3.407 10.813.113 3.96-.903 7.934-3.047 11.922Zm-13.719-22.203c-2.523-1.352-5.023-1.774-7.5-1.266-2.469.5-4.562 1.883-6.281 4.14l18.906 10.188c.914-2.625.906-5.125-.031-7.5-.93-2.375-2.625-4.226-5.094-5.562ZM585.025 144.125l10.234 7.407-35.234 48.672-10.234-7.407ZM581.208 219.24c-3.324-3.167-5.64-6.703-6.953-10.609-1.304-3.898-1.523-7.781-.656-11.656.863-3.883 2.785-7.383 5.766-10.5 2.976-3.125 6.382-5.207 10.218-6.25 3.832-1.04 7.727-.992 11.688.14 3.957 1.126 7.597 3.274 10.922 6.438 3.32 3.18 5.625 6.711 6.906 10.594 1.289 3.875 1.504 7.75.64 11.625-.867 3.875-2.788 7.375-5.765 10.5-2.98 3.113-6.387 5.191-10.219 6.234-3.836 1.05-7.719 1.02-11.656-.094-3.938-1.105-7.57-3.246-10.89-6.421Zm7.157-7.5c2.343 2.239 5.02 3.286 8.03 3.141 3.02-.148 5.798-1.543 8.329-4.187 2.539-2.657 3.812-5.496 3.812-8.516 0-3.008-1.171-5.633-3.515-7.875-2.344-2.238-5.031-3.297-8.063-3.172-3.023.125-5.804 1.516-8.343 4.172-2.532 2.648-3.793 5.484-3.782 8.516.008 3.039 1.188 5.68 3.532 7.922ZM651.714 233.048c2.344 3.3 3.711 6.844 4.11 10.625.406 3.789-.227 7.43-1.891 10.922-1.656 3.5-4.309 6.547-7.953 9.14-3.657 2.594-7.407 4.094-11.25 4.5-3.844.414-7.485-.195-10.922-1.828-3.438-1.625-6.328-4.09-8.672-7.39-3.219-4.532-4.324-9.11-3.313-13.735l-16.578 11.766-7.312-10.313 48.328-34.312 6.984 9.844-4.078 2.906c4.895.367 9.078 2.992 12.547 7.875Zm-29.406 18.187c1.875 2.633 4.305 4.164 7.297 4.594 2.988.438 5.976-.406 8.968-2.531 3-2.125 4.786-4.672 5.36-7.64.57-2.962-.078-5.759-1.953-8.391-1.875-2.649-4.305-4.184-7.282-4.61-2.98-.426-5.968.422-8.968 2.547-2.992 2.125-4.778 4.664-5.36 7.625-.586 2.957.063 5.758 1.938 8.406ZM680.22 284.387c1.664 3.695 2.328 7.441 1.984 11.234-.344 3.79-1.672 7.239-3.984 10.344-2.305 3.102-5.496 5.57-9.578 7.406-4.086 1.832-8.059 2.578-11.922 2.235-3.856-.344-7.309-1.653-10.36-3.922-3.043-2.274-5.398-5.258-7.062-8.953-2.262-5.063-2.453-9.766-.578-14.11l-18.547 8.313-5.156-11.547 54.093-24.234 4.922 11.015-4.578 2.047c4.727 1.32 8.317 4.711 10.766 10.172Zm-32.36 12.11c1.32 2.956 3.407 4.937 6.25 5.937 2.852 1 5.953.75 9.297-.75 3.352-1.5 5.598-3.649 6.735-6.438 1.144-2.793 1.054-5.668-.266-8.625-1.324-2.949-3.406-4.922-6.25-5.922s-5.945-.75-9.297.75c-3.344 1.5-5.59 3.645-6.734 6.438-1.149 2.789-1.059 5.66.265 8.61ZM680.165 361.893c-.157.03-1.282.207-3.375.53l-7.625-32.062c-2.492 1.207-4.242 3.067-5.25 5.578-1 2.52-1.121 5.383-.36 8.594.52 2.195 1.313 4.07 2.375 5.625 1.063 1.55 2.477 2.89 4.25 4.016l-5.547 8.234c-5.511-2.906-9.18-8.2-11-15.875-1.136-4.781-1.21-9.23-.218-13.344.988-4.117 2.894-7.57 5.718-10.359 2.832-2.781 6.348-4.672 10.547-5.672 4.157-.988 8.133-.89 11.938.297 3.812 1.18 7.055 3.258 9.734 6.25 2.688 3 4.535 6.625 5.547 10.875.988 4.156.988 8.125 0 11.906-.992 3.782-2.922 7.032-5.797 9.75-2.875 2.719-6.523 4.602-10.937 5.657Zm7.453-25.016c-.668-2.793-2.016-4.945-4.047-6.453-2.023-1.512-4.45-2.153-7.281-1.922l4.984 20.875c2.57-1.063 4.43-2.73 5.578-5 1.156-2.274 1.41-4.774.766-7.5ZM705.03 411.762l-43.515 2.032-.562-11.985 5.187-.234a16.498 16.498 0 0 1-4.61-5.781c-1.105-2.274-1.718-4.758-1.843-7.453-.273-5.72 1.16-10.325 4.297-13.813 3.133-3.492 7.941-5.387 14.422-5.687l24.578-1.157.578 12.61-22.719 1.062c-7.023.32-10.398 3.422-10.125 9.297.145 3.02 1.242 5.399 3.297 7.14 2.063 1.75 5.031 2.532 8.906 2.344l21.516-1ZM696.695 437.15c1.914 1.75 3.265 3.958 4.047 6.626.789 2.664 1 5.66.625 8.984l-11.579-1.297c.258-1.375.422-2.308.485-2.797.394-3.593-.297-6.527-2.078-8.796-1.782-2.262-4.684-3.621-8.703-4.079l-20.438-2.296 1.406-12.563 43.282 4.875-1.344 11.984ZM697.082 514.818c-1.762 4.707-4.075 8.5-6.938 11.375-2.855 2.875-6.074 4.703-9.656 5.484-3.586.789-7.352.453-11.297-1.016-3.887-1.46-6.934-3.668-9.14-6.625-2.212-2.949-3.438-6.445-3.688-10.484-.25-4.043.504-8.418 2.265-13.125l4-10.688-14.64-5.468 4.594-12.297 53.093 19.86Zm-28.188-11.329c-1.387 3.688-1.64 6.786-.766 9.297.883 2.52 2.79 4.332 5.72 5.438 2.976 1.113 5.624 1.004 7.937-.328 2.312-1.325 4.16-3.828 5.547-7.516l3.734-10-18.438-6.89ZM647.75 580.741l-29.25-40.86c-3.259-4.312-5-8.261-5.22-11.843-.218-3.574.758-7.137 2.922-10.688a22.037 22.037 0 0 1 4.39-5.187c1.75-1.531 3.524-2.57 5.313-3.125l5.266 8.61a10.812 10.812 0 0 0-3.469 1.796c-1.082.832-1.945 1.785-2.594 2.86-.894 1.476-1.265 2.894-1.109 4.25.156 1.363.84 2.914 2.047 4.656l.266.344 47.28 6.718-6.765 11.125-31.594-4.922 18.829 25.875ZM592.86 581.27c.086-1.543.527-3.156 1.328-4.844a23.22 23.22 0 0 1 3.125-4.828c3.312-3.98 6.89-6.215 10.734-6.703 3.836-.492 7.723.906 11.672 4.187l13.766 11.438 4.312-5.172 7.47 6.219-4.313 5.172 8.156 6.78-8.063 9.704-8.156-6.781-6.937 8.36-7.47-6.22 6.938-8.359-13.64-11.344c-1.407-1.168-2.797-1.71-4.172-1.625-1.383.094-2.625.801-3.719 2.125-1.281 1.54-1.953 3.203-2.016 4.985ZM598.902 632.798c-4.074 3.551-8.422 5.195-13.047 4.938-4.625-.262-9.035-2.793-13.234-7.594l-16.39-18.797 9.515-8.297 15.125 17.328c2.273 2.602 4.539 4.047 6.797 4.328 2.25.29 4.453-.507 6.61-2.39 2.394-2.086 3.655-4.492 3.78-7.219.133-2.73-1.074-5.559-3.625-8.484l-14.171-16.235 9.53-8.312 39.5 45.281-9.53 8.313-13.844-15.875c-.149 2.363-.828 4.664-2.047 6.906-1.211 2.238-2.867 4.273-4.969 6.11ZM533.042 624.555c3.969-2.313 8.012-3.559 12.125-3.734 4.117-.168 7.914.703 11.39 2.609 3.477 1.906 6.301 4.723 8.47 8.453 2.175 3.738 3.226 7.594 3.156 11.563-.063 3.976-1.188 7.707-3.375 11.187-2.188 3.488-5.266 6.39-9.235 8.703-3.968 2.301-8 3.531-12.093 3.688-4.094.164-7.875-.711-11.344-2.625-3.477-1.907-6.305-4.73-8.485-8.469-2.164-3.73-3.218-7.578-3.156-11.547.063-3.969 1.18-7.695 3.344-11.172 2.168-3.469 5.234-6.355 9.203-8.656Zm5.203 8.953c-2.8 1.625-4.55 3.899-5.25 6.828-.695 2.938-.125 5.989 1.719 9.156 1.844 3.188 4.215 5.204 7.11 6.047 2.898.844 5.745.453 8.546-1.172 2.805-1.625 4.563-3.914 5.281-6.859.72-2.937.157-6-1.687-9.187-1.844-3.168-4.223-5.168-7.14-6-2.915-.836-5.774-.438-8.579 1.187ZM499.446 688.662c-5.094 1.77-9.738 1.672-13.938-.297-4.207-1.969-7.359-5.965-9.453-11.985l-8.203-23.546 11.938-4.157 7.562 21.719c1.137 3.27 2.7 5.457 4.688 6.563 1.98 1.113 4.324 1.195 7.03.25 3-1.043 5.075-2.805 6.22-5.282 1.136-2.48 1.062-5.558-.22-9.234l-7.077-20.344 11.937-4.156 14.328 41.14-11.39 3.954-1.688-4.813c-.976 2.281-2.476 4.3-4.5 6.063-2.02 1.77-4.43 3.144-7.234 4.125ZM445.018 684.929l-22.782 2.328-1.03-10.078 22.78-2.328Zm0 0" />
    </svg>
)

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);


export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);