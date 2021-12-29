import React from 'react'

export default function Head({heads}) {
    return (
        <thead>
            <tr>
                {
                    heads.map((item, index) => (
                            <th key={index}>
                                {item}
                            </th>
                        )
                    )
                }
                <th>
                    Ações
                </th>
            </tr>
        </thead>
    )
}
