import React, { createContext, useContext, useEffect, useState } from 'react';

import { getToken } from '../../helpers/db';
import { useErrorNotification } from '../../hooks/useErrorNotification';

interface IProps {
	children: React.ReactNode;
}
interface IFetchContext {
	getSecretKey(): void;
	regenerateSecretKey(): void;
	key: string;
	loadingRegenerate: boolean;
	loading: boolean;
}

export interface ISecretKey {
	id: number;
	status: boolean;
	message: string;
	webhookUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Fetch: any = createContext({});
export const useFetchContext = () => useContext<IFetchContext>(Fetch);

const FetchProvider: React.FC<IProps> = ({ children }) => {
	const [key, setKey] = useState('');
	const [loading, setLoading] = useState(true);
	const [loadingRegenerate, setLoadingRegenerate] = useState(false);
	const WEBFLOW_API = 'https://webflow-uspacy.alterego.digital/webflow/v1';
	const { errorNotification } = useErrorNotification();
	const getSecretKey = async () => {
		setLoading(true);
		try {
			const token = await getToken();
			const res = await fetch(`${WEBFLOW_API}/keys/getWebhookUrl`, {
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			const data: ISecretKey = await res.json();
			setKey(data?.webhookUrl || '');
		} catch (e) {
			errorNotification();
		} finally {
			setLoading(false);
		}
	};

	const regenerateSecretKey = async () => {
		setLoadingRegenerate(true);
		try {
			const token = await getToken();
			await fetch(`${WEBFLOW_API}/keys/updateKey`, {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			});
			getSecretKey();
		} catch (e) {
			errorNotification();
		} finally {
			setLoadingRegenerate(false);
		}
	};

	useEffect(() => {
		getSecretKey();
	}, []);

	return (
		<Fetch.Provider
			value={{
				getSecretKey,
				regenerateSecretKey,
				key,
				loadingRegenerate,
				loading,
			}}
		>
			{children}
		</Fetch.Provider>
	);
};

export default FetchProvider;
