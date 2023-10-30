import { FC } from 'react';

type SemgrepIconProps = {
  className?: string;
};

export const SemgrepIcon: FC<SemgrepIconProps> = ({ className }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 1670 252">
      <g id="semgrep-ellipsis" fill="currentColor">
        <path d="m412-4e-7c55.22847 0 100 44.77153 100 100 0 55.22847-44.77153 100-100 100s-100-44.77153-100-100c1e-3 -22.75534 7.76297-44.82984 22.00391-62.57812 5.79468 6.661495 7.89062 10.6061 13.99609 20.57812h3.5c-3.0923-7.636258-7.63896-15.06492-13.76367-24.96093 18.96049-21.03049 45.94792-33.03689 74.26367-33.03906zm0 44c-30.92795 0-56 25.07205-56 56 0 30.92795 25.07205 56 56 56s56-25.07205 56-56c0-30.92794-25.07205-56-56-56z" />
        <path d="m256 0c-55.22841 0-100 44.77158-100 100 8e-3 22.74213 7.76844 44.80216 22 62.54102 0.04153-0.05203 0.07004-0.09276 0.11133-0.14454 0.01252 0.01556 0.02458 0.03133 0.03711 0.04688 0.96022-1.20705 1.88357-2.443 2.78711-3.69336 4.19703-5.49557 7.10017-10.10355 9.92773-17.07812 0.25397-0.55649 0.51186-1.11021 0.75586-1.67188h3.38086c-0.72386 2.98756-1.74037 5.91654-2.99414 8.88477-2.79519 5.99462-6.2697 12.37905-9.80078 18.10937-0.05698 0.09227-0.10092 0.17302-0.1582 0.26563 18.94128 20.83966 45.79173 32.72679 73.95312 32.74023 28.16139-0.01344 55.01184-11.90057 73.95312-32.74023-0.05728-0.09261-0.10122-0.17336-0.1582-0.26563-3.53108-5.73032-7.00559-12.11475-9.80078-18.10937-1.25377-2.96823-2.27028-5.89721-2.99414-8.88477h3.38086c0.244 0.56167 0.50189 1.11539 0.75586 1.67188 2.82756 6.97457 5.7307 11.58255 9.92773 17.07812 0.90354 1.25036 1.82689 2.48631 2.78711 3.69336 0.01253-0.01555 0.02459-0.03132 0.03711-0.04688 0.04129 0.05178 0.0698 0.09251 0.11133 0.14454 14.23156-17.73886 21.992-39.79889 22-62.54102 0-55.22842-44.77159-100-100-100zm0 44c30.92792 0 56 25.07208 56 56 0 30.92792-25.07208 56-56 56s-56-25.07208-56-56c0-0.966497 0.02388-1.926386 0.07227-2.880859 1.49985-29.58868 25.96631-53.11914 55.92773-53.11914z" />
        <path d="m100 0c-55.22848 0-100 44.77152-100 100 0 55.22847 44.77152 100 100 100 55.22847 0 100-44.77153 100-100-1e-3 -22.75534-7.76297-44.82984-22.00391-62.57812-5.79468 6.661495-7.89062 10.6061-13.99609 20.57812h-3.5c3.0923-7.636258 7.63896-15.06492 13.76367-24.96093-18.96049-21.03049-45.94792-33.03689-74.26367-33.03906zm0 44c30.92795 0 56 25.07205 56 56 0 30.92795-25.07205 56-56 56-30.92795 0-56-25.07205-56-56 0-30.92795 25.07205-56 56-56z" />
      </g>
      <g id="semgrep-letters" fill="currentColor">
        <path
          id="s"
          d="M659.55109 194.4763q-15.41724 0-28.48243-3.92117-13.0652-4.18248-23.51636-12.02494-10.45116-8.10366-18.55228-19.8669l20.64231-23.52687q12.8032 18.0379 24.82438 25.09587 12.01918 6.79666 27.96042 6.79666 9.40715 0 16.98426-2.87559 7.57802-2.87548 12.01918-8.10365 4.44227-5.22817 4.44227-11.76394 0-4.70538-1.56782-8.62645-1.56783-4.18258-4.96488-7.31947-3.39705-3.13698-8.36183-5.75097-4.96487-2.87558-11.49717-4.96677-6.5326-2.09119-14.89423-3.39838-14.11021-3.13698-24.82437-7.84216-10.45116-4.70528-17.76827-11.763938-7.05521-7.058063-10.45116-16.207914-3.39705-9.149252-3.39705-20.389893 0-11.23994 4.96487-20.650891 4.96488-9.672049 13.58721-16.729911 8.62313-7.058063 20.38131-10.7179437Q648.83763 6 662.16483 6q14.89423 0 26.6534 3.6596807 12.01919 3.6596803 21.16533 10.9789423 9.14573 7.058062 15.41723 17.513907l-21.16532 20.650891q-5.48748-8.365056-12.01918-13.854927-6.2714-5.751069-14.11022-8.626454-7.83922-2.875585-16.46225-2.875585-9.66835 0-16.98426 3.136984-7.0552 2.875584-11.23517 8.103557-4.18096 5.228172-4.18096 12.286935 0 5.228172 2.09033 9.672049 2.35164 4.182478 6.5326 7.58076 4.44227 3.398382 11.49717 6.012468 7.05521 2.614186 16.46225 4.443977 14.37122 3.136983 25.60839 8.103557 11.49718 4.705375 19.3363 11.239938 8.10062 6.53527 12.01918 14.90092 4.18096 8.36506 4.18096 18.03791 0 17.7759-8.36182 30.84684-8.10063 12.80893-23.25536 19.86689-15.15523 6.79666-35.80054 6.79666z"
        />
        <path
          id="e1"
          d="M815.75346 194.4763q-21.42632 0-37.88957-8.88785-16.46225-9.14925-25.8694-24.83487-9.14573-15.94591-9.14573-36.33581 0-16.20791 5.22617-29.539839 5.22618-13.33193 14.37122-23.003879 9.40715-9.933547 22.21034-15.16192 13.0652-5.489571 28.22143-5.489571 13.58721 0 25.08538 5.228173 11.75818 4.966773 20.38131 14.115925 8.62313 8.887853 13.0652 21.174888 4.70357 12.286933 4.44227 26.663863l-.26129 11.50294h-111.8317l-6.01009-21.69789h92.50341l-3.91966 4.44398v-6.01247q-.78393-8.365057-5.48749-14.639924-4.70357-6.535166-12.01918-10.194946-7.05521-3.92108-15.67824-3.92108-13.5872 0-22.73334 5.228173-9.14574 4.966674-14.11022 14.900921-4.70357 9.933546-4.70357 24.311876 0 13.85492 5.74869 24.04987 6.01009 10.19495 16.72225 15.94591 10.71317 5.48958 24.82438 5.48958 9.92975 0 18.29028-3.13699 8.36183-3.39838 18.29028-11.76394l14.63322 20.6509q-6.5327 6.27376-15.67824 10.97894-9.14574 4.70537-19.07429 7.31946-9.92975 2.61418-19.5973 2.61418z"
        />
        <path
          id="m"
          d="M899.25473 191.86632V54.367045h29.52845v28.493849l-4.96487 2.614086q2.35163-6.796664 6.794-12.808932 4.70357-6.012468 11.23517-10.717943 6.5327-4.705376 14.11021-7.319362 7.57752-2.613986 15.41724-2.614086 11.49717 0 20.1203 3.921079 8.88457 3.659681 14.63327 11.239941 6.01 7.58076 8.8845 19.344898l-4.7036-.784246 1.8291-4.443977q3.1357-6.012468 8.1006-11.23994 5.2262-5.489571 11.7582-9.41065 6.5325-4.182478 13.8492-6.273767 7.3166-2.352688 14.1102-2.352688 15.6782 0 25.8694 6.273767 10.1901 6.273767 15.4172 19.082899 5.2262 12.808933 5.2262 31.630837v82.86656h-29.7905V111.0948q0-11.239946-2.8745-18.298908-2.8744-7.058863-8.6231-10.455945-5.7487-3.659681-14.8943-3.659681-6.794 0-13.0652 2.352688-6.0101 2.352687-10.4511 6.535165-4.4423 4.182478-7.0553 9.933448-2.3519 5.489573-2.3519 12.286933v82.08157h-29.78842V110.5725q0-10.19495-3.13565-17.252911-2.87445-7.319461-8.62313-10.978942-5.74869-3.659681-14.11022-3.659681-6.794 0-12.80319 2.352688-6.01009 2.352687-10.45116 6.535165-4.44227 3.92108-7.05521 9.672049-2.35163 5.489572-2.35163 12.024932v82.60457z"
        />
        <path
          id="g"
          d="M1199.1093 251.996q-14.8942 0-29.7905-4.70527-14.8942-4.70538-24.3003-12.02494l10.9741-22.48188q5.2262 3.92118 12.0192 6.79666 7.0553 3.13699 14.6332 4.70528 7.8393 1.82989 15.6783 1.82989 14.1102 0 23.5163-4.70538 9.4071-4.44397 14.1103-13.59293 4.9648-8.88775 4.9648-22.21988v-25.61886l3.6583 1.56849q-1.3066 8.36505-8.6231 15.68492-7.0554 7.31946-17.7683 12.02493-10.7132 4.44388-21.9494 4.44388-19.3362 0-34.7545-9.14925-15.1552-9.14925-24.0403-25.09587-8.6233-15.94592-8.6233-36.59781t8.6233-36.596804q8.6231-16.207914 23.7783-25.356866 15.1552-9.41065 34.2325-9.41065 7.8393 0 15.1553 2.091189 7.3165 1.82989 13.5872 5.228172 6.2711 3.398382 10.9741 7.58076 4.9647 4.182478 8.1004 8.887753 3.1357 4.705375 3.9196 8.887853l-6.0101 2.091189.2613-31.892831h29.0055V182.98707q0 16.46891-4.9647 29.27784-4.7036 12.80893-14.1102 21.69789-9.1458 8.88785-22.4724 13.33193Q1215.829 252 1199.1038 252Zm1.0452-84.43455q12.2812 0 21.6883-5.75097 9.6684-5.75107 14.8943-15.68492 5.2261-9.93355 5.2261-23.26588 0-13.07093-5.4873-23.265874-5.2263-10.194946-14.6333-15.945916-9.407-5.75107-21.6883-5.75107-12.0192 0-21.4263 6.012469-9.4071 5.751069-14.6332 15.945915-5.2262 10.194946-5.2262 23.003876 0 13.07093 5.2262 23.26588 5.2261 9.93355 14.6332 15.68492 9.4071 5.75097 21.4263 5.75097z"
        />
        <path
          id="r"
          d="M1297.8108 191.86632V54.367045h29.2664l.5227 43.392771-3.6583-9.933548q2.8743-10.194946 9.9297-18.298903 7.0552-8.365056 16.2013-13.070931 9.1458-4.966674 18.8133-4.966674 4.4423 0 8.6231.784206 4.1809.784206 6.5327 1.82989l-7.8393 32.15383q-3.1356-1.307093-7.0552-2.091189-3.9196-1.045594-7.8392-1.045594-6.794 0-13.0652 2.614086-6.0102 2.614186-10.7132 7.319461-4.4424 4.443877-7.3165 10.71794-2.6131 6.01247-2.6131 13.33193v74.76161z"
        />
        <path
          id="e2"
          d="M1454.2132 194.4763q-21.4264 0-37.8896-8.88785-16.4623-9.14925-25.8684-24.83487-9.1458-15.94591-9.1458-36.33581 0-16.20791 5.2261-29.539839 5.2262-13.33193 14.3713-23.003879 9.4071-9.933547 22.2103-15.16192 13.0652-5.489571 28.2204-5.489571 13.5872 0 25.0844 5.228173 11.7582 4.966773 20.3823 14.115925 8.623 8.887853 13.0652 21.174888 4.7036 12.286933 4.4423 26.663863l-.2615 11.50294h-111.8317l-6.0101-21.69789h92.5034l-3.9197 4.44398v-6.01247q-.7839-8.365057-5.4875-14.639924-4.7034-6.535166-12.0191-10.194946-7.0554-3.92108-15.6783-3.92108-13.5872 0-22.7323 5.228173-9.146 4.966674-14.1102 14.900921-4.7036 9.933546-4.7036 24.311876 0 13.85492 5.7487 24.04987 6.0101 10.19495 16.7222 15.94591 10.7132 5.48958 24.8244 5.48958 9.9297 0 18.2903-3.13699 8.3618-3.39838 18.2903-11.76394l14.6332 20.6509q-6.5326 6.27376-15.6782 10.97894-9.1458 4.70537-19.0743 7.31946-9.9297 2.61418-19.5973 2.61418z"
        />
        <path
          id="p"
          d="M1532.8144 249.37601V54.367045h29.2664l.2611 31.369834-4.7036-2.352688q1.5679-8.103557 8.8846-15.16192 7.3165-7.319361 17.7682-11.763937 10.7132-4.443977 22.2104-4.443977 18.2903 0 32.4025 9.149252 14.3712 9.149251 22.7343 25.095867Q1670 102.20539 1670 122.85628q0 20.65189-8.3617 36.85781-8.1007 15.94591-22.4723 25.35686-14.1102 9.14926-32.1405 9.14926-12.0192 0-23.2564-4.70528-10.9741-4.70527-18.8132-12.28693-7.8393-7.58066-9.6685-15.94592l7.3168-3.65968v91.75351zm68.724-81.81956q11.4972 0 20.3813-5.75097 9.1458-5.75107 14.3712-15.68492 5.2261-10.19495 5.2261-23.26588 0-12.80893-5.2261-22.74288-4.9648-9.933544-14.1102-15.684914-8.8843-5.75097-20.6423-5.75097t-20.9043 5.75097q-8.8845 5.489571-14.1102 15.684914-5.2262 9.93355-5.2262 22.74288 0 13.07093 5.2262 23.26588 5.2262 9.93355 14.1102 15.68492 9.1456 5.75097 20.9043 5.75097z"
        />
      </g>
    </svg>
  );
};